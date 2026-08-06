import { useState, useEffect } from "react";
import { buildHeatmapData } from "../utils/heatmap";
import { GITHUB_STATS_FALLBACK } from "../data/githubConfig";


export function useGithubData() {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch("/api/github");

        if (!res.ok) {
          throw new Error(`API responded with ${res.status}`);
        }

        const json = await res.json();

        if (json.error) throw new Error(json.error);

        if (!cancelled) {
          setData({
            heatmap:            json.heatmap,
            totalContributions: json.totalContributions,
            repos:              json.repos,
            stars:              json.stars,
            followers:          json.followers,
          });
        }
      } catch (err) {
        console.warn("[useGithubData] API unavailable, using fallback:", err.message);
        // Graceful fallback — simulated data so the UI still looks good
        if (!cancelled) {
          setData({
            heatmap:            buildHeatmapData(),
            totalContributions: null,
            repos:              GITHUB_STATS_FALLBACK.repos,
            stars:              GITHUB_STATS_FALLBACK.stars,
            followers:          GITHUB_STATS_FALLBACK.followers,
          });
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

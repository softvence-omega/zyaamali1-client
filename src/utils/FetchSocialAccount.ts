// utils/fetchSocialAccounts.ts
export const fetchSocialAccounts = async (
  setLoading: (loading: boolean) => void,
  setSocialAccounts: (accounts: any) => void
) => {
  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/v1/connect/get-All-Data"
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    setSocialAccounts(data?.data || []);
  } catch (error) {
    console.error("❌ Error fetching social accounts:", error);
  } finally {
    setLoading(false);
  }
};

// src/components/DashboardProfile/SocialAccountsManager.tsx
import AvailableIntegration from '@/components/DashboardProfile/AvailableIntegration';
import ConnectedAdAccounts from '@/components/DashboardProfile/ConnectedAdAccounts';
import React, { useState, useEffect, useCallback } from 'react';


interface AdAccount {
  _id: string;
  name: string;
  company: string;
  icon: string;
  isSynced: boolean;
}

const SocialAccountsManager: React.FC = () => {
  const [socialAccounts, setSocialAccounts] = useState<AdAccount[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAccounts = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  // Function to update account status after connection
  const handleAccountConnected = (accountName: string) => {
    setSocialAccounts(prevAccounts => 
      prevAccounts.map(account => 
        account.name === accountName 
          ? { ...account, isSynced: true } 
          : account
      )
    );
  };

  // Function to update account status after disconnection
  const handleAccountDisconnected = (accountName: string) => {
    setSocialAccounts(prevAccounts => 
      prevAccounts.map(account => 
        account.name === accountName 
          ? { ...account, isSynced: false } 
          : account
      )
    );
  };

  return (
    <div>
      <ConnectedAdAccounts
        socialAccounts={socialAccounts} 
        loading={loading}
        onAccountDisconnected={handleAccountDisconnected}
        onReloadAccounts={loadAccounts}
      />
      <AvailableIntegration 
        socialAccounts={socialAccounts} 
        loading={loading}
        onAccountConnected={handleAccountConnected}
      />
    </div>
  );
};

export default SocialAccountsManager;
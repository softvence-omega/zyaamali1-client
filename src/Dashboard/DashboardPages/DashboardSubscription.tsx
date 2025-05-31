"use client";

import type React from "react";
import { useState } from "react";
import {
  FaCheck,
  FaCreditCard,
  FaDownload,
  FaHeadset,
  FaChevronRight,
} from "react-icons/fa";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  buttonStyle: string;
}

interface BillingHistoryItem {
  invoice: string;
  date: string;
  amount: string;
  status: string;
}

const DashboardSubscription: React.FC = () => {
  const [autoRenew, setAutoRenew] = useState(true);
  const [paymentEmail, setPaymentEmail] = useState(true);
  const [billingReminders, setBillingReminders] = useState(true);

  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      features: [
        "Up to 3 members",
        "10 Marketing Campaigns per month",
        "Basic analytics and reports",
        "Email support",
      ],
      buttonText: "Downgrade",
      buttonStyle:
        "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    },
    {
      name: "Pro",
      price: "$59",
      period: "/month",
      popular: true,
      features: [
        "Up to 10 members",
        "50 Marketing Campaigns per month",
        "Advanced analytics and reports",
        "Email & chat support",
      ],
      buttonText: "Current Plan",
      buttonStyle: "bg-gray-400 text-white cursor-not-allowed",
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited team members",
        "Unlimited marketing campaigns",
        "Advanced analytics and reports",
        "Email support",
      ],
      buttonText: "Upgrade",
      buttonStyle: "rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-T-100 font-bold",
    },
  ];

  const billingHistory: BillingHistoryItem[] = [
    {
      invoice: "INV-2025-0023",
      date: "22/06/2025",
      amount: "$3,000",
      status: "Download",
    },
    {
      invoice: "INV-2025-0023",
      date: "22/06/2025",
      amount: "$4,000",
      status: "Download",
    },
    {
      invoice: "INV-2025-0023",
      date: "22/06/2025",
      amount: "$1,000",
      status: "Download",
    },
    {
      invoice: "INV-2025-0023",
      date: "22/06/2025",
      amount: "$1,200",
      status: "Download",
    },
    {
      invoice: "INV-2025-0023",
      date: "22/06/2025",
      amount: "$500",
      status: "Download",
    },
  ];

  const ToggleSwitch: React.FC<{
    checked: boolean;
    onChange: (checked: boolean) => void;
  }> = ({ checked, onChange }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="w-full mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block text-4xl font-bold">
          Billing & Subscription
        </h1>
        <p className="text-T-600 mt-2">
          Manage your subscription, payment method & billing history
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-white">
        <div className="py-3 px-4 bg-T-300 rounded-2xl flex items-center justify-start">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Current Subscription Plan
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between mt-2 gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-gray-900">Pro Plan</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-3xl">
                ACTIVE
              </span>
            </div>
            <div className="mt-2 space-y-1">
              {[
                "Up to 10 members",
                "50 Marketing Campaigns per month",
                "Advanced analytics and reports",
                "Email & chat support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-lg text-gray-600">
                  <FaCheck className="w-3 h-3 text-[#FF8818] mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="text-left">
            <div className="text-sm text-gray-600">Next Billing Date</div>
            <div className="font-medium text-gray-900">22/06/2026</div>
            <div className="text-sm text-gray-600 mt-2">Current Amount</div>
            <div className="text-2xl font-bold text-gray-900">$19.99</div>

            <div className="flex space-x-2 mt-4">
              <button className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-T-100 font-bold">
                Change Plan
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium cursor-pointer rounded-3xl">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="bg-white">
        <h2 className="text-xl font-medium text-T-900 mb-6">Pricing Plans</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between border rounded-lg p-6 relative bg-T-300 h-full ${
                plan.popular ? "border-purple-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-[-6px] right-[-50px] transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-3 rounded-xl text-xs font-medium">
                    Current Plan
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-blue-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <hr className="mt-6 text-T-400" />

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <FaCheck className="w-3 h-3 text-[#FF8818] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full mt-6 px-4 py-2 rounded-md text-sm font-medium transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-T-300 p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment Methods
          </h2>
          <button className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-T-100 font-bold">
            Add payment method +
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border border-T-300 rounded-lg">
          <div className="flex items-center space-x-3">
            <FaCreditCard className="w-6 h-6 text-gray-400" />
            <div>
              <div className="font-medium text-gray-900">Visa Card</div>
              <div className="text-sm text-gray-600">**** **** **** 1234</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">23/06/2025</div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-T-300 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Billing History
          </h2>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>6 Months</option>
            <option>12 Months</option>
            <option>All Time</option>
          </select>
        </div>

        <div className="overflow-x-auto bg-white p-3 rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-medium text-gray-600">
                  Invoice
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 text-sm text-gray-900">{item.invoice}</td>
                  <td className="py-3 text-sm text-gray-600">{item.date}</td>
                  <td className="py-3 text-sm text-gray-900">{item.amount}</td>
                  <td className="py-3">
                    <button className="text-purple-600 text-sm font-medium hover:text-purple-700 flex items-center">
                      <FaDownload className="w-3 h-3 mr-1" />
                      {item.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto Renew & Notification */}
      <div className="bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Auto Renew & Notification
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-T-300 rounded-2xl">
            <div>
              <div className="font-medium text-gray-900">Auto Renew</div>
              <div className="text-sm text-gray-600">
                Automatically renew your subscription when it expires
              </div>
            </div>
            <ToggleSwitch checked={autoRenew} onChange={setAutoRenew} />
          </div>

          <div className="flex items-center justify-between p-4 border border-T-300 rounded-2xl">
            <div>
              <div className="font-medium text-gray-900">
                Payment Confirmed Email
              </div>
              <div className="text-sm text-gray-600">
                Receive email when your payment has been confirmed
              </div>
            </div>
            <ToggleSwitch checked={paymentEmail} onChange={setPaymentEmail} />
          </div>

          <div className="flex items-center justify-between p-4 border border-T-300 rounded-2xl">
            <div>
              <div className="font-medium text-gray-900">
                Billing Reminders Email
              </div>
              <div className="text-sm text-gray-600">
                Receive email when your subscription expires
              </div>
            </div>
            <ToggleSwitch
              checked={billingReminders}
              onChange={setBillingReminders}
            />
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white p-6">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-center space-x-3">
            <FaHeadset className="w-6 h-6 font-black text-black" />
            <div>
              <div className="font-medium text-gray-900">Contact Support</div>
              <div className="text-sm text-gray-600">
                Get help with your account
              </div>
            </div>
          </div>
          <button className="flex items-center text-purple-600 text-sm font-medium hover:text-purple-700 mt-2">
            Go to Contact Us Page
            <FaChevronRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscription;


export const exportDashboardReport = (dateRange: string) => {
  // Sample data structure for the report
  const reportData = {
    dateRange: `Last ${dateRange} Days`,
    generatedOn: new Date().toISOString(),
    metrics: {
      totalImpressions: 125000,
      totalClicks: 8750,
      clickThroughRate: '7.0%',
      totalConversions: 875,
      conversionRate: '10.0%',
      totalSpend: '$12,500',
      costPerClick: '$1.43',
      returnOnAdSpend: '4.2x'
    },
    campaigns: [
      {
        name: 'Summer Sale Campaign',
        impressions: 45000,
        clicks: 3150,
        conversions: 315,
        spend: '$4,500',
        roas: '3.8x'
      },
      {
        name: 'Product Launch Campaign',
        impressions: 38000,
        clicks: 2660,
        conversions: 280,
        spend: '$3,800',
        roas: '4.5x'
      },
      {
        name: 'Brand Awareness Campaign',
        impressions: 42000,
        clicks: 2940,
        conversions: 280,
        spend: '$4,200',
        roas: '4.1x'
      }
    ]
  };

  // Convert data to CSV format
  const csvContent = generateCSV(reportData);
  
  // Create and download the file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `ad-insights-report-${dateRange}days-${new Date().getTime()}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Report exported successfully for ${dateRange} days`);
};

const generateCSV = (data: any): string => {
  let csv = 'Ad Insights Dashboard Report\n\n';
  csv += `Generated on: ${new Date(data.generatedOn).toLocaleDateString()}\n`;
  csv += `Date Range: ${data.dateRange}\n\n`;
  
  // Overall Metrics
  csv += 'OVERALL METRICS\n';
  csv += 'Metric,Value\n';
  csv += `Total Impressions,${data.metrics.totalImpressions}\n`;
  csv += `Total Clicks,${data.metrics.totalClicks}\n`;
  csv += `Click-Through Rate,${data.metrics.clickThroughRate}\n`;
  csv += `Total Conversions,${data.metrics.totalConversions}\n`;
  csv += `Conversion Rate,${data.metrics.conversionRate}\n`;
  csv += `Total Spend,${data.metrics.totalSpend}\n`;
  csv += `Cost Per Click,${data.metrics.costPerClick}\n`;
  csv += `Return on Ad Spend,${data.metrics.returnOnAdSpend}\n\n`;
  
  // Campaign Performance
  csv += 'CAMPAIGN PERFORMANCE\n';
  csv += 'Campaign Name,Impressions,Clicks,Conversions,Spend,ROAS\n';
  
  data.campaigns.forEach((campaign: any) => {
    csv += `${campaign.name},${campaign.impressions},${campaign.clicks},${campaign.conversions},${campaign.spend},${campaign.roas}\n`;
  });
  
  return csv;
};

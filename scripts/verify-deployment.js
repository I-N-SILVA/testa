#!/usr/bin/env node

/**
 * 🔍 Plyaz Landing Page - Deployment Verification Script
 * Verifies that all features are working correctly after deployment
 */

const https = require('https');
const http = require('http');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Get base URL from environment or use default
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.argv[2] || 'http://localhost:3000';

console.log(`${colors.blue}🔍 Verifying Plyaz Landing Page Deployment${colors.reset}`);
console.log(`${colors.blue}Base URL: ${BASE_URL}${colors.reset}\n`);

// Helper function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        resolve({
          statusCode: response.statusCode,
          headers: response.headers,
          data: data
        });
      });
    });
    
    request.on('error', (error) => {
      reject(error);
    });
    
    // Set timeout
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Test cases
const tests = [
  {
    name: 'Main Page',
    url: BASE_URL,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('<html'),
      (data) => data.includes('Plyaz'),
      (data) => data.includes('motion')
    ]
  },
  {
    name: 'English Language Page',
    url: `${BASE_URL}/en`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('<html'),
      (data) => data.includes('lang="en"')
    ]
  },
  {
    name: 'Spanish Language Page',
    url: `${BASE_URL}/es`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('<html'),
      (data) => data.includes('lang="es"')
    ]
  },
  {
    name: 'French Language Page',
    url: `${BASE_URL}/fr`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('<html'),
      (data) => data.includes('lang="fr"')
    ]
  },
  {
    name: 'XML Sitemap',
    url: `${BASE_URL}/sitemap.xml`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('<?xml'),
      (data) => data.includes('<urlset'),
      (data) => data.includes('<loc>')
    ]
  },
  {
    name: 'Robots.txt',
    url: `${BASE_URL}/robots.txt`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('User-agent:'),
      (data) => data.includes('Sitemap:')
    ]
  },
  {
    name: 'PWA Manifest',
    url: `${BASE_URL}/manifest.json`,
    expectedStatus: 200,
    checks: [
      (data) => data.includes('"name"'),
      (data) => data.includes('Plyaz')
    ]
  }
];

// Run tests
async function runTests() {
  let passed = 0;
  let failed = 0;
  
  for (const test of tests) {
    try {
      console.log(`Testing: ${test.name}...`);
      
      const response = await makeRequest(test.url);
      
      // Check status code
      if (response.statusCode === test.expectedStatus) {
        console.log(`  ${colors.green}✅ Status: ${response.statusCode}${colors.reset}`);
      } else {
        console.log(`  ${colors.red}❌ Status: ${response.statusCode} (expected ${test.expectedStatus})${colors.reset}`);
        failed++;
        continue;
      }
      
      // Run content checks
      let contentChecksPassed = 0;
      for (const check of test.checks) {
        if (check(response.data)) {
          contentChecksPassed++;
        }
      }
      
      if (contentChecksPassed === test.checks.length) {
        console.log(`  ${colors.green}✅ Content checks: ${contentChecksPassed}/${test.checks.length}${colors.reset}`);
        passed++;
      } else {
        console.log(`  ${colors.red}❌ Content checks: ${contentChecksPassed}/${test.checks.length}${colors.reset}`);
        failed++;
      }
      
    } catch (error) {
      console.log(`  ${colors.red}❌ Error: ${error.message}${colors.reset}`);
      failed++;
    }
    
    console.log(''); // Empty line for spacing
  }
  
  // Summary
  console.log('='.repeat(50));
  console.log(`${colors.blue}📊 Verification Summary${colors.reset}`);
  console.log(`Total tests: ${passed + failed}`);
  console.log(`${colors.green}✅ Passed: ${passed}${colors.reset}`);
  console.log(`${colors.red}❌ Failed: ${failed}${colors.reset}`);
  
  if (failed === 0) {
    console.log(`\n${colors.green}🎉 All tests passed! Your deployment is working perfectly!${colors.reset}`);
    console.log(`\n${colors.blue}✨ Features verified:${colors.reset}`);
    console.log('   ✅ Multi-language support');
    console.log('   ✅ SEO optimization (sitemap, robots.txt)');
    console.log('   ✅ Progressive Web App manifest');
    console.log('   ✅ All pages accessible');
    
    process.exit(0);
  } else {
    console.log(`\n${colors.yellow}⚠️  Some tests failed. Please check the issues above.${colors.reset}`);
    process.exit(1);
  }
}

// Run the verification
runTests().catch((error) => {
  console.error(`${colors.red}❌ Verification failed: ${error.message}${colors.reset}`);
  process.exit(1);
});
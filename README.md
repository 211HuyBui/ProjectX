Project Overview
The goal of this project is to set up a basic SOC pipeline for monitoring web traffic, identifying suspicious activity, and analyzing security logs. By utilizing Splunk, we can centralize log data, detect anomalies, and visualize findings through dashboards.

Architecture
Website Hosting: The website huypass.com is hosted on AWS S3.
Log Collection: AWS S3 access logs are stored in a separate S3 bucket dedicated to receiving logs.
Log Ingestion: The logs from the S3 bucket are ingested into Splunk for analysis.
Security Monitoring: Splunk is used to monitor for any suspicious activity, such as brute force attacks, IP address anomalies, or unauthorized access attempts.
Steps Involved
S3 Setup
The huypass.com website is hosted in an S3 bucket, and an additional S3 bucket is configured to receive the access logs. AWS S3 logging is enabled for tracking HTTP requests to the static website.

Log Collection to Splunk

The logs stored in the dedicated S3 bucket are fetched using Splunk's AWS S3 input integration.
A Splunk Heavy Forwarder or Splunk Universal Forwarder (depending on the setup) is configured to forward the logs from the S3 bucket to Splunk for indexing.
Log Parsing & Field Extraction
In Splunk, the logs are parsed and indexed, extracting important fields like:

IP addresses
Request paths
User agents
Timestamps
Detection & Alerting

Detection queries are set up in Splunk to monitor for:
High-frequency requests from a single IP address.
Unauthorized access to sensitive URLs or paths.
Requests originating from known blacklisted IP addresses.
Alerts are configured to notify the SOC team when suspicious activity is detected.
Dashboard & Visualization
A Splunk dashboard is created to provide an overview of the website's traffic, with sections including:

Traffic summary (total requests, top referrers, etc.)
Alerts and flagged events
IP address and request volume analysis
Incident Response
An incident report is generated for any flagged activity, and steps are documented to mitigate any threats.

Files
Splunk Configuration Files: Includes configuration for AWS S3 integration and index setup.
Log Data Samples: A sample log file from the S3 access logs.
Splunk Queries: Sample search queries for detecting anomalies and suspicious traffic.
Dashboard Configuration: A Splunk dashboard configuration file showing key metrics.

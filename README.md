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


A Splunk dashboard is created to provide an overview of the website's traffic, with sections including:

Traffic summary (total requests, top referrers, etc.)
Alerts and flagged events
IP address and request volume analysis
Incident Response
An incident report is generated for any flagged activity, and steps are documented to mitigate any threats.


Steps:
1. Upload HTML, CSS, and JS to S3
Create an S3 Bucket for your website  here i named (huy-passgenerator).
Upload your files (HTML, CSS, JS) to the S3 bucket.
Enable Static Website Hosting:
Set an Index document (e.g., index.html).
Set an Error document (e.g., error.html).
Set permissions to make the files public if necessary.
2. Enable S3 Access Logging (S3-to-S3)
Create an S3 bucket for logs huypass-logs).
Enable Access Logging on the website S3 bucket (huypass-website) and set huypass-logs as the destination.
Set permissions on the log bucket to allow S3 logging.
3. Ingest S3 Logs into Splunk
Install Splunk Add-on for AWS (TA-AWS) on Splunk.

Step 3: Set Up S3-to-Splunk Data Ingestion

Install Splunk Add-on for AWS:

In Splunk, install the Splunk Add-on for Amazon Web Services (TA-AWS).
This add-on will help you collect logs directly from AWS S3.
Set Up the Splunk Universal Forwarder (if applicable):

Go to your Splunk instance and navigate to Settings → Data Inputs.
Click on Add Data and then select Amazon S3.
Provide your AWS Access Key ID and Secret Access Key for accessing your S3 bucket (huypass-logs).
Specify the S3 bucket (huypass-logs) and the prefix (e.g., logs/) if used.
Choose the Sourcetype as aws:s3:accesslogs for access logs.
Optionally, choose the index (create a new index if required, e.g., aws_logs).
Create a Splunk Index (if not already created):

Go to Settings → Indexes.
Click New Index.
Provide an Index Name (e.g., aws_logs).
Configure other options as needed (e.g., size limits, retention policies).
Create an Index in Splunk (if not already created).

Go to Settings → Indexes → New Index.
4. Verify and Monitor in Splunk
Search Logs in Splunk:
sourcetype="aws:s3:accesslogs" index="aws_logs"
Create Dashboards and Alerts for monitoring the logs.

Files
Splunk Configuration Files: Includes configuration for AWS S3 integration and index setup.
Log Data Samples: A sample log file from the S3 access logs.
Splunk Queries: Sample search queries for detecting anomalies and suspicious traffic.
Dashboard Configuration: A Splunk dashboard configuration file showing key metrics.

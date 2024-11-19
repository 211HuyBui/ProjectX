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




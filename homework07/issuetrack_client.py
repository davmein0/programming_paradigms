import requests
import csv
from collections import defaultdict

# Base API endpoint
HOST = "http://jcssdev.pythonanywhere.com/"

def comments_per_bug():
    # Create csv file handle for output data 
    with open("total_comments_per_bug.csv", "w", newline="") as f:
        csv_writer = csv.writer(f)

        # Write the header row
        csv_writer.writerow(["bug_id", "total"])

        # comments endpoint
        url = HOST + "comments/"

        # Count the number of comments per bug
        bug_count = defaultdict(int)

        # Iterate though all pages
        while url:
            response = requests.get(url)
            resp_json = response.json()
            # Search every comment. 
            for r in resp_json["results"]:
                # Extract bug_id from the URL string
                bug_id = r["bug"][len(HOST + "bugs/"):-1] 
                # Increment the corresponding bug_id counter
                bug_count[bug_id] += 1

            url = resp_json["next"]

        # Record results to the output csv
        for key, count in bug_count.items():
            csv_writer.writerow([key, count])

def bugs_per_package():
    # Create "total_bugs_per_package.csv" to output data to
    with open("total_bugs_per_package.csv", "w", newline="") as f:
        csv_writer = csv.writer(f)
        
        csv_writer.writerow(["package", "total"])
        
        url = HOST + "bugs/"

        bug_count = {}
        
        # Iterate through all the pages, until no 'next' urlz
        while url:
            # Get data from API
            response = requests.get(url)
            # Parse JSON response
            json_resp = response.json()
            # Go through each individual package
            for r in json_resp["results"]:
                if r["package"] not in bug_count:
                    bug_count[r["package"]] = 1
                else:
                    bug_count[r["package"]] += 1

            # Update url to next page
            url = json_resp["next"]
            
        for package, total in bug_count.items():
            csv_writer.writerow([package, str(total)])

if __name__ == '__main__':
    bugs_per_package()
    comments_per_bug()
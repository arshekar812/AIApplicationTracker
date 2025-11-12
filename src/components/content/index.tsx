/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
//import { h } from "preact";
import { CompSlider } from "comp-slider/comp-slider";
import { JobStatusCard } from "job-status/job-status";
import { useState } from "preact/hooks";

// Define job state type
type JobSelection = {
  jobCode: string;
  jobStep: string;
  jobStatus: string;
  briefStatus: string;
  detailedStatus: string;
} | null;

export function Content() {
  const [selectedJob, setSelectedJob] = useState<JobSelection>(null);
  
  
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <CompSlider></CompSlider>
       {/* Only show job-status-card if a card was clicked  */}
      <div data-bind="if: selectedJob">
        {selectedJob && (
        <JobStatusCard
          jobCode={selectedJob.jobCode ?? '000000'}
          jobStep={selectedJob.jobStep ?? 'Initial Review'}
          jobStatus={selectedJob.jobStatus ?? 'Initial Review'}
          briefStatus={selectedJob.briefStatus ?? 'Application Received'}
          detailedStatus={selectedJob.detailedStatus ?? "Your application has been received and is under initial review."}
        />
      )}
      
      
        
      </div>
      {/* test code  */}
      <JobStatusCard
          jobCode='000000'
          jobStep='Initial Review'
          jobStatus='Initial Review'
          briefStatus='Application Received'
          detailedStatus="Your application has been received and is under initial review."
        />
    </div>
  );
};

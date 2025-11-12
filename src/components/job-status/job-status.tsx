import { registerCustomElement, ObservedGlobalProps } from "ojs/ojvcomponent";

//import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { ComponentProps, ComponentType } from "preact";
import { getStatusImage } from "./status-images";
import componentStrings = require("ojL10n!./resources/nls/job-status-strings");
import "css!./job-status-styles.css";

type JobStatusProps = {
  jobCode: string;
  briefStatus: string;
  detailedStatus: string;
  jobStep: string;
  jobStatus: string;
};

type Props = {
  jobStatusCard?: JobStatusProps[];
} & ObservedGlobalProps<never>;


/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 * 
 */
function JobStatusCardImpl(props: JobStatusProps) {
  

  const imageUrl = getStatusImage(props.jobStep) ?? null;
  //const imageUrl = getStatusImage(newprops.jobStep) ?? null;
  return (
    <div class="job-status-card">
      <div class="job-status-header">
        <p class="job-code">
          Your applied job code: <strong>{props.jobCode}</strong>
        </p>

        <p class="job-status-title">
          Status: <strong>{props.briefStatus}</strong>
        </p>

        <p class="job-status-desc">
          {props.detailedStatus}
        </p>
      </div>

      <div class="job-status-image-container">
        {imageUrl ? (
          <img src={imageUrl} class="job-status-image" />
        ) : (
          <div class="job-status-image-placeholder">
            {/* Placeholder for recruitment process graphic */}
          </div>
        )}
      </div>

      <p class="job-status-footer">CCSD Recruitment Process</p>
    </div>
  );
}

export const JobStatusCard = registerCustomElement(
  "job-status-card",
  JobStatusCardImpl
);
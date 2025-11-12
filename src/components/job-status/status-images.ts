/**
 * Returns the image URL for a given job step.
 */
export function getStatusImage(jobStep: any): string {

  const step = jobStep?.trim().toLowerCase();

  // Logic-based mapping
  if (step === "initial review") {
    return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/To Be Reviewed.png";
  }

  if (
    step === "hm preview" ||
    step === "assistant review" ||
    step === "analyst review" ||
    step === "director review"
  ) {
    return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/In Review.png";
  }

  if (step === "interviews") {
    return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/Interview.png";
  }

  if (step === "pre-offer check" ||
    step == "offer" || step == "post-offer check"
  ) {
    return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/Offer.png";
  }

  if (step === "hire") {
    return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/Hired.png";
  }

  // Default / fallback image
  return "https://objectstorage.us-chicago-1.oraclecloud.com/p/mBde2uhG4OQ6x3aBwAhzv39pOYpM1OubgA3vk2fwdLc8-VZMcOb8NAq5vCnOdfeI/n/axjewbihwf65/b/ccsd-static-files/o/oda-docs/statuses.png";
}

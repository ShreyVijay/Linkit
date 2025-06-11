import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div className="flex flex-col gap-4 pl-20 pr-150 py-10">
      <p className="text-3xl font-bold ">Contact Us</p>
      <div className="pl-5">
        <p>Have questions, feedback, or suggestions?</p>
        <p>We’d love to hear from you!</p>
        <p>📧 Email: support@yoururlshortener.com</p>
        <p>🌐 Website: www.yoururlshortener.com</p>
        <p>🐞 Report a Bug: report@yoururlshortener.com</p>
        <p>We're here to help — no bots, no delays, just real support.</p>
      </div>
    </div>
  );
};

export default contact;

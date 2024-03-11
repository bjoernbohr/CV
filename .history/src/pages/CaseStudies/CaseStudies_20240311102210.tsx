import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

export const CaseStudies = (): JSX.Element => {
  const { title } = useParams<{ title: string }>(); // Use useParams to access the 'title' URL parameter

  // You can use the 'title' parameter to fetch specific content for the subpage
  // For example, you could fetch content based on the 'title' from an API or a local data source

  return (
    <div>
      <h1>Subpage: {title}</h1>
      {/* Render the content specific to the subpage */}
    </div>
  );
};
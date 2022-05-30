import React from 'react';
import Accordion from './Accordion';

const FAQS = () => {

  const data = [
        {
            title: "How do I pay for delivery",
            content: "We provide a very comfortable payment method",
        },
        {
            title: "How long does delivery take",
            content: "Delivery typically takes less than 24 hours to anywhere in the country",
        },
        {
            title: "Does GWL deliver cross country",
            content: "Yes, we deliver within and outside the country",
        },
        {
            title: "Does GWL handle cargo deliveries",
            content: "Yes, we handle cargo deliveries",
        },
        {
            title: "How do I guarantee the safety of my package",
            content: "We are insured by a leading insurance company in Nigeria, so your package is safe with us",
        },
  ];

  return (
    <div className="faqs" id='faqs'>
      <h3>Frequently Asked Questions</h3>
      {data.map(({title, content}) => (
         <Accordion title={title} content={content} />
      ))}
      <h4>Still have questions?</h4>
      <p>If you cannot find answer to your question in our FAQ, you can always contact us. We will always be here to answer you!</p>
    </div>
  )
}

export default FAQS
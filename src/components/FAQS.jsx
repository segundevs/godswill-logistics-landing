import React from 'react'
import Faq from "react-faq-component";



const FAQS = () => {

  const data = {
    rows: [
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
    ],
};


const styles = {
    bgColor: 'white',
    titleTextColor: "hsl(0, 0%, 20%)",
    rowTitleColor: "hsl(0, 0%, 20%)",
    rowContentColor: 'hsl(0, 0%, 20%)',
    arrowColor: "hsl(259,1%,48%)",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
};


  return (
    <div id='faqs' className='faqs'>
      <h3>Frequently Asked Questions</h3>
      <Faq
        data={data}
        styles={styles}
        config={config}
      />
      <h4>Still have questions?</h4>
      <p>If you cannot find answer to your question in our FAQ, you can always contact us. We will always be here to answer you!</p>
    </div>
  )
}

export default FAQS
import React, { useContext } from "react";
import { Popover, Steps } from "antd";
import { CounterContext } from "../context/counterContext";
import { useTranslation } from "react-i18next";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = "You can hover on the dot.";

function getStateNumber (data){



    console.log(data.CurrentStatus.state);
    switch(data.CurrentStatus.state) {
        case 'PACKAGE_RECEIVED': {
            return 0
        }
        case '': {
            return 1
        }
        case 'IN_TRANSIT': {
            return 2
        }
        case 'DELIVERED': {
            return 3
        }
        
    }
}

export default function Navigate() {


    const { t } = useTranslation();
    const { data } = useContext(CounterContext);

return (
    <>
    <Steps
        current={data ? getStateNumber(data) : 0}
        progressDot={customDot}
        items={[
            {
                title: `${t("shipmentCreated")}`,
                // description,
                
            },
            {
                title: `${t("shipmentMerchant")}`,
                // description,
            },
            {
                title: `${t("shipmentDelivery")}`,
                // description,
            },
            {
                title: `${t("deliveredHanded")}`,
                // description,
            },
        ]}
    />
    </>
);
}

import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    specificSalesOrderId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.specificSalesOrderId}`);
    }, 100);
  });
  return {
    title,
  };
};

export default function SpecificSalesOrder({ params }: Props) {
  return (
    <div>Intercepted Details About: Product {params.specificSalesOrderId}</div>
  );
}

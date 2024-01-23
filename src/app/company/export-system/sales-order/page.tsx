import React from "react";
import Link from "next/link";

export default function SalesOrderListing() {
  return (
    <div>
      <div>List of sales order</div>
      <p>
        <br />
        <br />
        <Link href="/company/export-system/sales-order/01">SO01</Link>
        <br />
        <br />
        <Link href="/company/export-system/sales-order/02">SO02</Link>
        <br />
        <br />
        <Link href="/company/export-system/sales-order/03">SO03</Link>
        <br />
        <br />
        <Link href="/company/export-system/sales-order/04">SO04</Link>
        <br />
        <br />
      </p>
    </div>
  );
}

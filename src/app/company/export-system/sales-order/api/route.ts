import { sales_orders } from "./data";

export async function GET() {
  return Response.json(sales_orders);
}

export async function POST(request: Request) {
  const so = await request.json();
  const new_sales_order = {
    _id: sales_orders.length.toString(),
    sales_order_number: so.sales_order_number,
    date_of_addition: new Date(),
  };
  sales_orders.push(new_sales_order);
  return new Response(JSON.stringify(new_sales_order), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

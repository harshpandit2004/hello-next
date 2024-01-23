import { sales_orders } from "../data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const sSalesOrder = sales_orders.find(
    (specific_sales_order) => specific_sales_order._id === params.id
  );
  if (sSalesOrder) {
    return Response.json({
      message: "Sales Order Found",
      status: true,
      status_code: 200,
      data: sSalesOrder,
    });
  }
  return Response.json({
    message: "Sales Order !Found",
    status: false,
    status_code: 404,
  });
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const body = await request.json();
  const { updated_sales_order_number } = body;
  const specific_sales_order_index = sales_orders.findIndex(
    (s) => s._id === params.id
  );
  if (specific_sales_order_index !== null) {
    sales_orders[specific_sales_order_index].sales_order_number =
      updated_sales_order_number;
    return Response.json({
      message: "Sales Order Found",
      status: true,
      status_code: 200,
      data: sales_orders[specific_sales_order_index],
    });
  }
  return Response.json({
    message: "Sales Order !Found",
    status: false,
    status_code: 404,
  });
}

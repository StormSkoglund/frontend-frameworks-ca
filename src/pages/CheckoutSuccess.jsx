import { Link } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"

function CheckoutSuccess() {
  return (
    <div>
      <h1 className="text-center m-5 font-bold text-2xl text center">
        CHECKOUT WAS SUCCESSFUL
      </h1>
      <div className="bg-theme2 rounded-lg shadow-lg w-10/12 md-8/12 mt-10 mb-10 m-auto px-5 lg:px-80 pb-10 flex flex-col justify-start align-middle text-center">
        <p className="mt-4 mb-5">Thank you for your purchase!</p>
        <p>Your order has been successfully placed and is being processed.</p>
        <p className="mt-4 mb-4 font-bold">Delivery Information:</p>
        <p className="mt-4 mb-4">
          Your parcel will be shipped from our store located at 123 Imaginary
          Street, 0450 Oslo, Norway. Delivery times vary based on your location
          within Norway:
        </p>
        <p className="mt-4 mb-4 font-semibold">Oslo and surrounding areas</p>:
        1-2 business days
        <p className="mt-4 mb-4 font-semibold">
          Bergen, Stavanger, and Trondheim
        </p>
        <p> : 2-3 business days</p>
        <p className="mt-4 mb-4 font-semibold">
          Northern Norway (excluding Svalbard and Jan Mayen)
        </p>{" "}
        <p className="mt-4 mb-4">: 3-5 business days</p>
        <p className="mt-4 mb-4 font-semibold">Other regions</p>: 2-4 business
        days
        <p className="mt-4 mb-4">
          You will receive a notification with tracking details once your parcel
          has been dispatched. If you have any questions or need further
          assistance, please do not hesitate to contact our customer service
          team.
        </p>
        <p className="mt-4 mb-4">Thank you for shopping with us!</p>
        <p className="mt-4 mb-4">Best regards,</p>
        <p>The BuyThat Team.</p>
      </div>
      <Link to="/" className="text-center">
        <div className="block mx-auto text-lg font-semibold">Go Back</div>
        <div className="text-gray-900 mx-auto w-20 flex rounded-lg flex-row justify-center align-middle bg-theme2 shadow-sm hover:shadow-lg hover:bg-theme1 p-5 mt-2 mb-2">
          <TiArrowBack />
        </div>
      </Link>
    </div>
  )
}

export default CheckoutSuccess

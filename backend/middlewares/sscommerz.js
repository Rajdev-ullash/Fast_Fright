// exports.sslcommerzSetup = async (req, res , next) => {
//     const data = {
//         total_amount: 100,
//         currency: 'EUR',
//         tran_id: 'REF123',
//         success_url: 'http://yoursite.com/success',
//         fail_url: 'http://yoursite.com/fail',
//         cancel_url: 'http://yoursite.com/cancel',
//         ipn_url: 'http://yoursite.com/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer.',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: 'Customer Name',
//         cus_email: 'cust@yahoo.com',
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         multi_card_name: 'mastercard',
//         value_a: 'ref001_A',
//         value_b: 'ref002_B',
//         value_c: 'ref003_C',
//         value_d: 'ref004_D'
//     };
//     const sslcommer = new SSLCommerzPayment('testbox', 'qwerty', true) //true for live default false for sandbox
//     sslcommer.init(data).then(data => {
//         //process the response that got from sslcommerz 
//         //https://developer.sslcommerz.com/doc/v4/#returned-parameters
//         if(data?.GatewayPageURL){
//             return res.status(200).redirect(data?.GatewayPageURL);
//         } else{
//             return res.status(400).json({
//                 message: 'ssl commerce was not successful'
//             })
//         }
//     });
// }
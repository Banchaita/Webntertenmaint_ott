import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";


const Terms = () => {
    const router = useRouter();

    const handleAgree =()=>{
        router.push('/PrivacyPolicy')
    }

    
    return (
        <>

            <div className="signup_bg_gradient bg-cover h-screen grid place-items-center">
                <p className="w-52 absolute top-0 left-0 m-2 text-4xl">
                    <img src="/weber_logo-removebg.png" alt="" className="logo" />
                </p>
                <div className="w-100 mx-auto p-4 rounded-lg shadow-l">
                    <div className="grid grid-cols-6 grid-rows-12 gap-4 justify-items-center mb-6">
                        <div className="col-span-6 md:col-span-3">
                            <p className="text-center text-xl text-blue-600 font-semibold  pb-1 mb-4 cursor-pointer">WEBNTERTENMAINT</p>
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <Link href="/">
                                <p className="text-center text-xl text-black font-semibold hover:border-b-2 hover:border-red-500 pb-1 mb-4 cursor-pointer">Signin</p>
                            </Link>
                        </div>
                    </div>
                    <p className="text-start text-gray-400 mb-4">STEP 4 OF 5</p>
                    <p className='text-black text-center text-2xl mb-7'><b> TERMS OF USE</b></p>

                    <div className='terms-body' style={{ maxHeight: '500px', overflowY: 'scroll' }}>

                        <p className='text-black'>
                            WEBNTERTENMAINT provides a personalized subscription service that allows our members to access Video and Audio <br /><br />

                            Entertainment Content (“WEBNTERTENMAINT content”) streamed over the Internet to certain Internet-connected TVs,<br />
                            computers and other devices ("WEBNTERTENMAINT ready devices").<br /><br />

                            These Terms of Use govern your use of our service. As used in these Terms of Use, "WEBNTERTENMAINT service", "our <br />
                            service" or "the service" means the personalized service provided by WEBNTERTENMAINT for discovering and watching<br />
                            WEBNTERTENMAINT content, including all features and functionalities, recommendations and reviews, the website or<br />
                            app, and user interfaces, as well as all content and software associated with our service.<br />

                            Membership<br /><br />

                            1. Your WEBNTERTENMAINT membership will continue until terminated. To use the WEBNTERTENMAINT service you must have<br />
                            Internet access and a WEBNTERTENMAINT-ready device, and provide us with one or more Payment Methods.<br />
                            “Payment Method” means a current, valid, accepted method of payment, as may be updated from time<br />
                            to time, and which may include payment through your account with a third party. Unless you cancel your<br />
                            membership before your billing date, you authorize us to charge the membership fee for the next billing<br />
                            cycle to your Payment Method (see "Cancellation" below).<br />

                            2. We may offer a number of membership plans, including memberships offered by third parties in<br />
                            conjunction with the provision of their own products and services. We are not responsible for the<br />
                            products and services provided by such third parties. Some membership plans may have differing conditions and limitations,<br />
                            which will be disclosed at your sign-up or in other communications made<br />
                            available to you. You can find specific details regarding your WEBNTERTENMAINT membership by visiting our website<br />
                            or app or app and clicking on the "Account" link available at the top of the pages under your profile name.<br />
                            available to you. You can find specific details regarding your WEBNTERTENMAINT membership by visiting our website<br />
                            or app or app and clicking on the "Account" link available at the top of the pages under your profile name.<br />
                            Promotional Offers<br />

                            We may from time to time offer special promotional offers, plans or memberships (“Offers”). Offer eligibility<br />
                            is determined by WEBNTERTENMAINT at its sole discretion and we reserve the right to revoke an Offer and put your<br />
                            account on hold in the event that we determine you are not eligible. Members of households with an existing<br />
                            or recent WEBNTERTENMAINT membership may not be eligible for certain introductory Offers. We may use information<br />
                            such as device ID, method of payment or an account email address used with an existing or recent WEBNTERTENMAINT<br />
                            membership to determine Offer eligibility. The eligibility requirements and other limitations and conditions<br />
                            will be disclosed when you sign-up for the Offer or in other communications made available to you.<br />

                            Billing and Cancellation<br />
                            1. Billing Cycle: The membership fee for the WEBNTERTENMAINT service and any other charges you may incur in<br />
                            connection with your use of the service, such as taxes and possible transaction fees, will be charged to<br />
                            your Payment Method on the specific payment date indicated on the "Account" page. The length of your<br />
                            billing cycle will depend on the type of subscription that you choose when you signed up for the service.<br />
                            In some cases your payment date may change, for example if your Payment Method has not successfully<br />
                            settled, when you change your subscription plan or if your paid membership began on a day not<br />
                            contained in a given month. Visit our website or app or app and click on the "Billing details" link on the<br />
                            "Account" page to see your next payment date. We may authorize your Payment Method in anticipation<br />
                            of membership or service-related charges through various methods, including authorizing it for up to<br />
                            approximately one month of service as soon as you register. If you signed up for WEBNTERTENMAINT using your<br />
                            account with a third party as a Payment Method, you can find the billing information about your WEBNTERTENMAINT<br />
                            membership by visiting your account with the applicable third party.<br />

                            2. Payment Methods: To use the WEBNTERTENMAINT service you must provide one or more Payment Methods.<br />
                            You authorize us to charge any Payment Method associated to your account in case your primary<br />
                            Payment Method is declined or no longer available to us for payment of your subscription fee. You remain<br />
                            responsible for any uncollected amounts. If a payment is not successfully settled, due to expiration,<br />
                            insufficient funds, or otherwise, and you do not cancel your account, we may suspend your access to the<br />
                            service until we have successfully charged a valid Payment Method. For some Payment Methods, the<br />
                            issuer may charge you certain fees, such as foreign transaction fees or other fees relating to the<br />
                            processing of your Payment Method. Local tax charges may vary depending on the Payment Method<br />
                            used. Check with your Payment Method service provider for details.<br />


                            3. Updating your Payment Methods: You can update your Payment Methods by going to the<br />
                            "Account" page. We may also update your Payment Methods using information provided by the payment<br />
                            service providers. Following any update, you authorize us to continue to charge the applicable Payment<br />
                            Method(s).<br />

                            4. Cancellation: You can cancel your WEBNTERTENMAINT membership at any time, and you will continue to have<br />
                            access to the WEBNTERTENMAINT service through the end of your billing period. To the extent permitted by the<br />
                            applicable law, payments are non-refundable and we do not provide refunds or credits for any partial<br />
                            membership periods or unwatched WEBNTERTENMAINT content. To cancel, go to the "Account" page and follow the<br />
                            instructions for cancellation. If you cancel your membership, your account will automatically close at the<br />
                            end of your current billing period. To see when your account will close, click "Billing details" on the<br />
                            "Account" page. If you signed up for WEBNTERTENMAINT using your account with a third party as a Payment Method<br />
                            and wish to cancel your WEBNTERTENMAINT membership, you may need to do so through such third party, for example <br />
                            by visiting your account with the applicable third party and turning off auto-renew, or<br />
                            unsubscribing from the WEBNTERTENMAINT service through that third party.<br />
                            unsubscribing from the WEBNTERTENMAINT service through that third party.<br />

                            5. Changes to the Price and Subscription Plans: We may change our subscription plans and<br />
                            the price of our service from time to time; however, any price changes or changes to your subscription<br />
                            plans will apply no earlier than 30 days following notice to you.<br />
                            WEBNTERTENMAINT Service<br />

                            1. You must be at least 18 years of age to become a member of the WEBNTERTENMAINT service. <br />Minors may only use the
                            service under the supervision<br /> of an adult.<br />

                            2. The WEBNTERTENMAINT service and any content viewed through the service are for your personal and non-commercial<br />
                            use only and may not be shared with individuals beyond your household. During your WEBNTERTENMAINT membership<br />
                            we grant you a limited, non-exclusive, non-transferable right to access the WEBNTERTENMAINT service and view WEBNTERTENMAINT<br />
                            content. Except for the foregoing, no right, title or interest shall be transferred to you. You agree not to use<br />
                            the service for public performances.<br />

                            3. You may view the WEBNTERTENMAINT content primarily within the country in which you have established your account<br />
                            and only in geographic locations where we offer our service and have licensed such content. The content<br />
                            that may be available to watch will vary by geographic location and will change from time to time.<br />

                            4. The WEBNTERTENMAINT service, including the content library, is regularly updated. In addition, we continually test<br />
                            various aspects of our service, including our website or app, user interfaces, promotional features and<br />
                            availability of WEBNTERTENMAINT content. You can turn off tests participation at any time by visiting the "Account" page<br />
                            and changing the "Test participation" settings.<br />

                            5. Some WEBNTERTENMAINT content is available for temporary download and offline viewing on certain supported<br />
                            devices (“Offline Titles”). Limitations apply, including restrictions on the number of Offline Titles per account,<br />
                            the maximum number of devices that can contain Offline Titles, the time period within which you will need<br />
                            to begin viewing Offline Titles and how long the Offline Titles will remain accessible. Some Offline Titles may<br />
                            not be playable in certain countries and if you go online in a country where you would not be able to stream<br />
                            that Offline Title, the Offline Title will not be playable while you are in that country.<br />

                            6. You agree to use the WEBNTERTENMAINT service, including all features and functionalities associated therewith, in<br />
                            accordance with all applicable laws, rules and regulations, or other restrictions on use of the service or<br />
                            content therein. You agree not to archive, reproduce, distribute, modify, display, perform, publish, license,<br />
                            create derivative works from, offer for sale, or use (except as explicitly authorized in these Terms of Use)<br />
                            content and information contained on or obtained from or through the WEBNTERTENMAINT service. You also agree not<br />
                            to: circumvent, remove, alter, deactivate, degrade or thwart any of the content protections in the WEBNTERTENMAINT<br />
                            service; use any robot, spider, scraper or other automated means to access the WEBNTERTENMAINT service; decompile,<br />
                            reverse engineer or disassemble any software or other products or processes accessible through the WEBNTERTENMAINT<br />
                            service; insert any code or product or manipulate the content of the WEBNTERTENMAINT service in any way; or use any<br />
                            data mining, data gathering or extraction method. In addition, you agree not to upload, post, e-mail or<br />
                            otherwise send or transmit any material designed to interrupt, destroy or limit the functionality of any<br />
                            computer software or hardware or telecommunications equipment associated with the WEBNTERTENMAINT service,<br />
                            including any software viruses or any other computer code, files or programs. We may terminate or restrict<br />
                            your use of our service if you violate these Terms of Use or are engaged in illegal or fraudulent use of the<br />
                            service.<br />

                            7. The quality of the display of the WEBNTERTENMAINT content may vary from device to device, and may be affected by<br />
                            a variety of factors, such as your location, the bandwidth available through and/or speed of your Internet<br />
                            connection. HD, Ultra HD and HDR availability is subject to your Internet service and device capabilities. Not<br />
                            all content is available in all formats, such as HD, Ultra HD or HDR and not all subscription plans allow you to <br />
                            receive content in all formats. Default playback settings on cellular networks exclude HD, Ultra HD and HDR<br />
                            content. The minimum connection speed for SD quality is 1.0 Mbps; however, we recommend a faster<br />
                            connection for improved video quality. A download speed of at least 3.0 Mbps per stream is recommended<br />
                            to receive HD content (defined as a resolution of 720p or higher). A download speed of at least 15.0 Mbps<br />
                            per stream is recommended to receive Ultra HD (defined as a resolution of 4K or higher). You are responsible<br />
                            for all Internet access charges. Please check with your Internet provider for information on possible Internet<br />
                            data usage charges. The time it takes to begin watching WEBNTERTENMAINT content will vary based on a number of<br />
                            factors, including your location, available bandwidth at the time, the content you have selected and the<br />
                            configuration of your WEBNTERTENMAINT ready device.<br />
                            content. The minimum connection speed for SD quality is 1.0 Mbps; however, we recommend a faster<br />
                            connection for improved video quality. A download speed of at least 3.0 Mbps per stream is recommended<br />
                            to receive HD content (defined as a resolution of 720p or higher). A download speed of at least 15.0 Mbps<br />
                            per stream is recommended to receive Ultra HD (defined as a resolution of 4K or higher). You are responsible<br />
                            for all Internet access charges. Please check with your Internet provider for information on possible Internet<br />
                            data usage charges. The time it takes to begin watching WEBNTERTENMAINT content will vary based on a number of<br />
                            factors, including your location, available bandwidth at the time, the content you have selected and the<br />
                            configuration of your WEBNTERTENMAINT ready device.<br />

                            8. WEBNTERTENMAINT software is developed by, or for, WEBNTERTENMAINT and may solely be used for authorized streaming and<br />
                            viewing of WEBNTERTENMAINT content through WEBNTERTENMAINT ready devices. This software may vary by device and medium,<br />
                            and functionalities and features may also differ between devices. You acknowledge that the use of the<br />
                            service may require third party software that is subject to third party licenses. You agree that you may<br />
                            automatically receive updated versions of the WEBNTERTENMAINT software and related third-party software.<br />

                            Passwords and Account Access<br />
                            The member who created the WEBNTERTENMAINT account and whose Payment Method is charged (the "Account<br />
                            Owner") is responsible for any activity that occurs through the WEBNTERTENMAINT account. To maintain control over the<br />
                            account and to prevent anyone from accessing the account (which would include information on viewing<br />
                            history for the account), the Account Owner should maintain control over the WEBNTERTENMAINT ready devices that are<br />
                            used to access the service and not reveal the password or details of the Payment Method associated with<br />
                            the account to anyone. You are responsible for updating and maintaining the accuracy of the information<br />
                            you provide to us relating to your account. We can terminate your account or place your account on hold in<br />
                            order to protect you, WEBNTERTENMAINT or our partners from identity theft or other fraudulent activity.<br />
                            Warranties and Limitations on Liability<br />
                            The WEBNTERTENMAINT service is provided "as is" and without warranty or condition. In particular, our service may not<br />
                            be uninterrupted or error-free. You waive all special, indirect and consequential damages against us. These<br />
                            terms will not limit any non-waivable warranties or mandatory consumer protection rights that apply to you.<br />

                            Class Action Waiver<br />
                            WHERE PERMITTED UNDER THE APPLICABLE LAW, YOU AND WEBNTERTENMAINT AGREE THAT EACH MAY BRING CLAIMS<br />
                            AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS<br />
                            MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, where permitted under the<br />
                            applicable law, unless both you and WEBNTERTENMAINT agree otherwise, the court may not consolidate more than one<br />
                            person's claims with your claims, and may not otherwise preside over any form of a representative or class<br />
                            proceeding.<br />

                            Miscellaneous<br />
                            1. Governing Law: These Terms of Use shall be governed by and construed in accordance with the laws<br />
                            of the country where it is being used.<br />

                            2. Unsolicited Materials: WEBNTERTENMAINT does not accept unsolicited materials or ideas for WEBNTERTENMAINT content<br />
                            and is not responsible for the similarity of any of its content or programming in any media to materials or<br />
                            ideas transmitted to WEBNTERTENMAINT.<br />

                            3. Customer Support: To find more information about our service and its features or if you need<br />
                            assistance with your account, please visit the WEBNTERTENMAINT Help Centre on our website or app. In certain instances,<br />
                            Customer Service may best be able to assist you by using a remote access support tool through which we<br />
                            have full access to your computer. If you do not want us to have this access, you should not consent to<br />
                            support through the remote access tool, and we will assist you through other means. In the event of any<br />
                            conflict between these Terms of Use and information provided by Customer Support or other portions of our<br />
                            website or app, these Terms of Use will control.<br />


                            assistance with your account, please visit the WEBNTERTENMAINT Help Centre on our website or app. In certain instances,<br />
                            Customer Service may best be able to assist you by using a remote access support tool through which we<br />
                            have full access to your computer. If you do not want us to have this access, you should not consent to<br />
                            support through the remote access tool, and we will assist you through other means. In the event of any<br />
                            conflict between these Terms of Use and information provided by Customer Support or other portions of our<br />
                            website or app, these Terms of Use will control.<br />

                            4. Survival: If any provision or provisions of these Terms of Use shall be held to be invalid, illegal, or<br />
                            unenforceable, the validity, legality and enforceability of the remaining provisions shall remain in full force<br />
                            and effect.<br />

                            5. Changes to Terms of Use and Assignment: WEBNTERTENMAINT may, from time to time, change these<br />
                            Terms of Use. We will notify you at least 30 days before such changes apply to you. We may assign or transfer<br />
                            our agreement with you including our associated rights and obligations at any time and you agree to<br />
                            cooperate with us in connection with such an assignment or transfer.<br />

                            6. Electronic Communications: We will send you information relating to your account (e.g.<br />
                            payment authorizations, invoices, changes in password or Payment Method, confirmation messages,<br />
                            notices) in electronic form only, for example via emails to your email address provided during registration.<br />


                        </p>
                        <div class="flex justify-center items-center mt-10">
                            <button type="button" onClick={handleAgree} className="w-[250px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                I AGREE
                            </button>

                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Terms
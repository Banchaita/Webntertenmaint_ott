import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';


const PrivacyPolicy = () => {
    const router = useRouter();

    const handleAgree = () => {
        // router.push('/PhoneVerify')
        router.push('/Profile')
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
                    <p className="text-start text-gray-400 mb-4">STEP 5 OF 5</p>
                    <p className='text-black text-center text-2xl mb-7'><b> PRIVACY POLICY</b></p>

                    <div className='terms-body' style={{ maxHeight: '500px', overflowY: 'scroll' }}>

                        <p className='text-black'>
                            We, MAD Cinetech ("we", "us", "MAD Cinetech") value the trust placed in use by You and therefore,<br />
                            we follow the highest standards of privacy guidelines to protect the information shared by You with us.<br />

                            This Privacy Policy ("Privacy Policy") governs the use of Personal Information shared (as defined below) with<br />
                            or collected by MAD Cinetech from the users or subscribers of 'WEBNTERTENMAINT.'<br />

                            Your viewing or browsing of our content or Your use of our services offered on WEBNTERTENMAINT is constructed to<br />
                            mean that You consent to our collection, storage, processing and transfer of your Personal Information or<br />
                            Sensitive Personal Data or Information in accordance with this Privacy Policy and you consent to the terms<br />
                            and conditions of this Privacy Policy. You agree to be bound by the terms of this Privacy Policy.<br />


                            If You do not agree with the terms contained herein, please do not download or browse WEBNTERTENMAINT. By mere<br />
                            browsing or use of WEBNTERTENMAINT platform or its application, You consent to the terms of this Privacy Policy and<br />
                            agree to the use of Your Personal Information in the manner as provided under this Privacy Policy.<br />
                            All capitalized terms that have not been specifically defined herein shall have the same meaning as provided<br />
                            under the Terms of Use.<br />

                            This Privacy Policy should be read in conjunction and together with the Terms of Use available on<br />
                            www.webntertainment.com/terms<br />
                            'Personal Information', 'Information' and 'Sensitive Personal Data or Information' shall have the meaning<br />
                            ascribed to it under the applicable laws in India.<br />
                            I Agree<br />

                            <b> Collection and Use of Personal Information</b><br />
                            We collect the information directly provided by you, your usage and log data, data collected through cookies<br />
                            and similar technologies.<br />

                            <b>Data provided by user</b><br />
                            We collect the following personal information about You when You use or browse WEBNTERTENMAINT, at the time of<br />
                            Your registration with WEBNTERTENMAINT and when You share such information with Us through email, by posting on<br />
                            WEBNTERTENMAINT or by any other means like customer care centre, etc made available to You by Us.<br />
                            We collect information with respect to Your name, mobile number, email, address, IP Address, zip code, age,<br />
                            gender, occupation etc.<br />

                            Based on Your purchase of a subscription package, our payment gateway partners collect information with<br />
                            respect to Your credit/debit card details or other bank account details. This information is stored by our<br />
                            payment gateway partners. For instance, WEBNTERTENMAINT will be using third party payment gateway providers to<br />
                            process and facilitate the payment of Your Subscription Fee to WEBNTERTENMAINT for providing you access to the<br />
                            subscription. Please note that WEBNTERTENMAINT does not directly collect any financial information such as credit card<br />
                            or debit card or net banking details from You. Such payment gateway partners are not controlled by us.<br />
                            When you visit such payment gateways you do so at your own risk. These payment gateways may have their<br />
                            own privacy policies in place, which we recommend You review if You visit any such payment gateways. We<br />
                            do not assume any responsibility or liability for such payment gateways, the content of such payment<br />
                            gateways and their privacy practices, nor do we endorse them. We encourage you to familiarize yourself<br />
                            with the privacy statements provided by such payment gateways prior to providing them with information<br />
                            about you or entering into any transactions with them.<br />


                            While transacting with these payment gateways, You may provide Your financial information including<br />
                            without limitation Your bank account details, credit card account details or your details pertaining to any<br />
                            payment settlement or pre-paid instrument service provider. You understand, agree and acknowledge that<br />
                            WEBNTERTENMAINT never receives Your financial and payment information from these payment gateways. Your Personal<br />
                            Information, Sensitive Personal Data or Information and financial information will be dealt with by these<br />
                            payment gateways in accordance with their respective privacy policies and other terms and conditions and<br />
                            WEBNTERTENMAINT shall not be liable, accountable or responsible for Your Personal Information, Sensitive Personal Data<br />
                            or Information and financial information which You provide to these payment gateways.<br />


                            If you choose to log-in, access or otherwise connect to WEBNTERTENMAINT, through a third-party service (such as<br />
                            Facebook, Twitter, etc.), we may, for example, collect your user ID and user name associated with that<br />
                            service, as well as any information you make public using that service. We may also collect information you<br />
                            have authorized the service to share with us (such as your user ID, billing information, public profile<br />
                            information, email address, birthday, and other account and profile data).<br />

                            We collect information in order to provide You with a safe, efficient, smooth and customized experience.<br />
                            This allows Us to provide services and features that most likely meet Your needs, and to customize WEBNTERTENMAINT<br />
                            to make Your experience safer and easier.<br />

                            When you agree to share information pertaining to the applications frequently used by you on your device,<br />
                            we will combine this information with other information that you provide to us on the WEBNTERTENMAINT Serv ice, to<br />
                            display advertisements that are more relevant to your interest areas e.g., if you frequently use applications<br />
                            related to education events, we may serve advertisements of companies or products related to education<br />
                            events. You understand, agree and acknowledge that our collection, storage and processing of your<br />

                            information is for a lawful purpose connected with the functioning of the WEBNTERTENMAINT Service. You hereby <br />
                            consent to the collection, storage, use, disclosure, transfer, processing of your information for the purposes set out<br />
                            hereinabove.<br />
                            hereinabove.<br />
                            Except as provided herein, we do not solicit any Sensitive Information about You. However, if You share such<br />
                            information with us voluntarily, We will not be liable for any actions, claims, costs, expenses or other<br />
                            liabilities that may arise as a consequence of such any unauthorized use or misuse of such information.<br />


                            <b>Inferred Information through usage and log data</b><br />
                            We may track certain information about you based upon your behaviour on WEBNTERTENMAINT. We use this information<br />
                            for conducting internal research on our users' demographics, devices, interests, and behaviour to better<br />
                            understand, protect and serve Our users. This information is compiled and analyse on an aggregated basis.<br />
                            This information may include the others apps you downloaded, the platform you just visited (whether this<br />
                            platform is on WEBNTERTENMAINT or not), which platform you visit next and your computer browser information. We<br />
                            may also collect your Information to track user behaviour and preferences for internal analytics and research.<br />
                            We may also use your information: (i) to evaluate your interest for various genres of content, services, offers;<br />
                            (ii) to perform analytics and conduct customer research, to determine your interest, for identifying content<br />
                            that generate sales and to analyse traffic patterns.<br />


                            If You choose to post messages on social media accounts, message boards, chat rooms or other message<br />
                            areas or leave feedback, We will collect that information You provide to Us. We retain this information as<br />
                            necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.<br />
                            If You send Us personal correspondence, such as emails or letters, or if other users or third parties send Us<br />
                            correspondence about Your activities or postings on WEBNTERTENMAINT, we may collect and store such information.<br />
                            We identify and use Your IP address to help diagnose any problems with Our server, and to administer<br />
                            WEBNTERTENMAINT. Your IP address is also used to help identify You and to gather broad demographic information to<br />
                            customize Your experience on WEBNTERTENMAINT.<br />
                            We will occasionally ask You to complete optional online surveys. These surveys may ask You for contact<br />
                            information and demographic information (like zip code, age, etc). We use this data to tailor Your experience<br />
                            at WEBNTERTENMAINT, providing You with content that We think You might be interested in and to display content<br />
                            according to Your preferences.<br />


                            <b>Cookie</b><br />
                            A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read<br />
                            back from that browser. Cookies are useful for enabling the browser to remember information specific to a<br />
                            given user. We place both permanent and temporary cookies in Your computer's hard drive. The cookies do<br />
                            not contain any of Your personally identifiable information.<br />
                            We may combine Your Personal Information or Sensitive Personal Data or Information, other information<br />
                            and information collected from tracking technologies and aggregate it with information collected from other<br />
                            Users using our service to attempt to provide You with the Services and a better experience on WEBNTERTENMAINT.<br />


                            <b>User consent</b><br />
                            You expressly understand, agree and acknowledge that our collection, storage and processing of your<br />
                            Personal Information or Sensitive Personal Data or Information is for a lawful purpose connected with a<br />
                            function or activity of WEBNTERTENMAINT platform. You hereby consent to the collection, storage, use, disclosure,<br />
                            transfer, of the Personal Information or Sensitive Personal Data or Information by WEBNTERTENMAINT or MAD CINETECH<br />
                            for the purposes set out herein. You further understand, agree and acknowledge that Your Personal<br />

                            Information, which is classified as Sensitive Personal Data or Information as per applicable laws, is considered necessary for <br />
                            WEBNTERTENMAINT to provide various services on its platform to You and for Your usage of the platform<br />
                            and other services provided by WEBNTERTENMAINT and You affirmatively give consent to WEBNTERTENMAINT for collecting, storing,<br />
                            transferring and processing Your Personal Information.<br />
                            and other services provided by WEBNTERTENMAINT and You affirmatively give consent to WEBNTERTENMAINT for collecting, storing,<br />
                            transferring and processing Your Personal Information.<br />


                            <b>Disclosure of Personal Information with Third Parties</b><br />
                            We may disclose Personal Information to affiliates and group companies. We may also disclose Your Personal<br />
                            Information with third parties strictly on confidential terms. We may disclose such information to third<br />
                            parties in order to provide You access to WEBNTERTENMAINT and facilitate or Your participation in any contest, game or<br />
                            activity conducted by MAD CINETECH, to comply with Our legal obligations, to enforce Our Terms of Use, to<br />
                            facilitate Our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent<br />
                            or illegal activities related to WEBNTERTENMAINT.<br />
                            You hereby provide Your express consent to us for sharing Your Personal Information with third parties for<br />
                            marketing and advertising purposes.<br />


                            We shall endeavour that the third parties and agents engaged by us to whom we may provide access to Your<br />
                            Personal Information or Sensitive Personal Data or Information for the purposes set out herein are under an<br />
                            contractual obligation to protect Your Personal Information or Sensitive Personal Data or Information in<br />
                            accordance with the same standard that WEBNTERTENMAINT has agreed to be subject to in this Privacy Policy.<br />
                            WEBNTERTENMAINT may disclose Your Personal Information or Sensitive Personal Data or Information to such extent as<br />
                            WEBNTERTENMAINT may deem necessary for You to enter into commercial transactions with the website and/or<br />
                            application of WEBNTERTENMAINT. Recipients of your Personal Information or Sensitive Personal Data may be located<br />
                            outside India. This may include countries where applicable data protection laws provide a lesser degree of<br />
                            protection than India. However, You expressly consent to usage of such Personal Information and Sensitive<br />
                            Personal Data.<br />

                            In the event of any requirement by court order, government or quasi-government agency to disclose Your<br />
                            Personal Information, We will disclose information as may be legally required. We may also disclose Your<br />
                            Personal Information if We, in the good faith believe that such disclosure is reasonably necessary to respond<br />
                            to subpoenas, court orders, or other legal process.<br />
                            In the event MAD CINETECH is merged with or acquired by another company or in case of re-organization or<br />
                            re-structuring of business, we and our affiliates will share Your Personal Information, wholly or in part, with<br />
                            another business entity.<br />

                            <p> Third Party Sites</p><br />
                            WEBNTERTENMAINT may provide links to various third party websites that may collect Your Personal Information. Use of<br />
                            Your information collected by such third party platform will be governed by the privacy policy in such third<br />
                            party platform. MAD CINETECH has no control on the operation of such third party websites and You may<br />
                            share information with such third party at Your sole risk. MAD CINETECH shall not be liable to You for any<br />
                            misappropriation of Your Personal Information by such third party.<br />

                            <b>Promotional and Marketing Activities</b><br />
                            We will send communications through various modes like sms, message, email, etc to You at regular intervals<br />
                            to notify You of, among other things, various offers, new content, exclusive deals etc., that may be available<br />
                            or new services that You may be interest to subscribe to etc. By accessing WEBNTERTENMAINT, You expressly consent to<br />
                            receiving such communications from us at regular intervals. However, if You do not wish to receive any<br />
                            communication from us, You may request to unsubscribe from such communication by sending an email to<br />
                            support.in@webntertainment.com with the subject as "Unsubscribe". <br />


                            <b>Data Retention</b><br />
                            We retain Personal Information or Sensitive Personal Data or Information only for as long as We believe it to<br />
                            be necessary for purposes set out herein for which the Personal Information or Sensitive Personal Data or<br />
                            Information was collected, subject to any legal requirements for the data to be retained for longer periods<br />
                            of time.<br />


                            <b>Deleting Your Information</b><br />
                            If You wish to have the Personal Information or Sensitive Personal Data or Information that You have<br />
                            provided to us deleted, You can always do so by sending a request to us on the e-mail id of our Customer<br />
                            Services department provided at the bottom of this page. You may note that deletion of certain Personal<br />
                            Information may lead to cancellation of your registration with the WEBNTERTENMAINT and/or your access to certain<br />
                            features of 5 can be restricted and may also lead to complete cessation of Your Access to WEBNTERTENMAINT platform<br />
                            or application. Collection And Use Of Personal Information We collect the information directly provided by<br />
                            you, your usage and log data, data collected through cookies and similar technologies.<br />

                            <b>Data provided by user</b><br />
                            We collect the following personal information about You when You use or browse WEBNTERTENMAINT, at the time of<br />
                            Your registration with WEBNTERTENMAINT and when You share such information with Us through email, by posting on<br />
                            WEBNTERTENMAINT or by any other means like customer care centre, etc made available to You by Us.<br />

                            <b>Security and Compliance with Laws</b><br />
                            We strive to protect Your Personal Information against unauthorized disclosure, misuse, unlawful use,<br />
                            modification, loss or destruction. We take all reasonable measures and precautions, as per standard industry<br />
                            practises, to keep Your Personal Information confidential. We ensure compliance with all applicable laws.<br />
                            We use reasonable administrative, logical, physical and managerial measures to safeguard your personal<br />
                            information against loss, theft and unauthorized access, use and modification as per law. Unfortunately, no<br />
                            measures can be guaranteed to provide 100% security. Accordingly, we cannot guarantee the security of<br />
                            your information. By continuing to access the WEBNTERTENMAINT platform you are aware of such risk.<br />


                            <b>Amendments</b><br />
                            This Privacy Policy is subject to change from time to time without any written notice to You. We reserve the<br />
                            right, at our sole discretion, to modify the terms of this Privacy Policy from time to time in order to ensure<br />
                            compliance with applicable laws (Updated Terms). The Updated Terms shall be effective immediately and<br />
                            shall supersede these the terms of this Privacy Policy. We will not be under an obligation to notify you of any<br />
                            changes to this Privacy Policy. You shall be solely responsible for reviewing the Privacy Policy from time to<br />
                            time for any modifications. By continuing to use WEBNTERTENMAINT after the Updated Terms have been published, You<br />
                            affirm Your agreement to the Updated Terms.<br />


                            <b>Contact Us</b><br />
                            If You require any information or clarification regarding the use of Your Personal Information or this Privacy<br />
                            Policy, You can contact us at support.in@webntertainment.com<br />
                            If You have any grievances with respect to use of Your Personal Information, please email us at<br />
                            support.in@webntertainment.com MAD CINETECH is a company based in India. By browsing/using WEBNTERTENMAINT, <br />
                            You hereby acknowledge that MAD<br />
                            CINETECH is not responsible or liable in any manner to comply with any local laws of Your territory except<br />
                            India with respect to WEBNTERTENMAINT.<br />
                            CINETECH is not responsible or liable in any manner to comply with any local laws of Your territory except<br />
                            India with respect to WEBNTERTENMAINT.<br />


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

export default PrivacyPolicy
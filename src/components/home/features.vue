<template>
    <section class="big">
        <div class="hero">
            <div class="center">
                <h2 class="color-white margin-m-bottom">Packed with features.</h2>
                <div class="flex-center">
                    <div class="full">
                        <img src="../../../public/assets/sonar.png" alt="">
<!--                        <video ref="player" width="100%" height="auto" autoplay playsinline muted>-->
<!--                            <source src="/assets/motion/features-billing.mp4" type="video/mp4">-->
<!--                        </video>-->
                    </div>
                </div>
                <div class="tabs">
                    <ul class="flex-inline">
                        <li :class="[showFeature == 'Billing' ? 'active' : 'inactive']" @click="showFeature = 'Billing'">Billing</li>
                        <li :class="[showFeature == 'CRM' ? 'active' : 'inactive']" @click="showFeature = 'CRM'">CRM</li>
                        <li :class="[showFeature == 'Contracts' ? 'active' : 'inactive']" @click="showFeature = 'Contracts'">Contracts</li>
                        <li :class="[showFeature == 'Inventory' ? 'active' : 'inactive']" @click="showFeature = 'Inventory'">Inventory</li>
                        <li :class="[showFeature == 'Mapping' ? 'active' : 'inactive']" @click="showFeature = 'Mapping'">Mapping</li>
                        <li :class="[showFeature == 'Portal' ? 'active' : 'inactive']" @click="showFeature = 'Portal'">Portal</li>
                        <li :class="[showFeature == 'Provisioning' ? 'active' : 'inactive']" @click="showFeature = 'Provisioning'">Provisioning</li>
                        <li :class="[showFeature == 'Monitoring' ? 'active' : 'inactive']" @click="showFeature = 'Monitoring'">Monitoring</li>
                        <li :class="[showFeature == 'Ticketing' ? 'active' : 'inactive']" @click="showFeature = 'Ticketing'">Ticketing</li>
                        <li :class="[showFeature == 'Scheduling' ? 'active' : 'inactive']" @click="showFeature = 'Scheduling'">Scheduling</li>
                        <li :class="[showFeature == 'API' ? 'active' : 'inactive']" @click="showFeature = 'API'">Cloud</li>
                    </ul>
                </div>
                <p v-show="showFeature == 'Billing'" class="description">
                    <span class="titleTabs">Flexible, automated billing</span>
                    <br><br>
                    The Sonar billing engine is one of our best-loved features.
                    The flexible software offers support for multi-month billing, automatic proration, geographical taxation, and more.
                    All the power you need, backed by proper accounting practices.
                    To make life even easier, Sonar integrates with numerous external services.
                    That means you can add automated taxation, automatically send out invoices to customers, and even use your chosen payment processor.
                    <br><br>
                    <span class="titleTabs">Intelligent billing data</span>
                    <br><br>
                    We’re not just getting your billing done. We’re also providing valuable insights.
                    Our in-depth financial reporting tool provides key info and analysis at a glance.
                    See data like ARPU, aged receivables, and tax info, all at the touch of a button.
                </p>
                <p v-show="showFeature == 'CRM'" class="description">
                    <span class="titleTabs">Take control of your data</span>
                    <br><br>
                    Sonar changes the way you view your customers.
                    With our software, you can sort customer data in whatever way you choose: by service, by status, by type – however you want.
                    What does this mean for your business? Your customer experiences can be tailored with minimal intervention.
                    For example: emails can be automatically triggered for certain subsets – saving you significant man-hours, while still making each user’s experience feel personal.
                    <br><br>
                    <span class="titleTabs">Integrated CRM</span>
                    Customer service is also revolutionized – with the ability to sort through vital data such as names, MAC addresses, IP addresses, and tickets, all in real time.
                    Support staff can quickly transition call logs into tickets, then schedule and monitor field work within the same system.
                    Third party integration completes the package. Automate marketing campaigns with Market Broadband, collect leads with TowerCoverage.com,
                    and implement custom integrations with our new GraphQL API.
                </p>
                <p v-show="showFeature == 'Contracts'" class="description">
                   <span class="titleTabs">Let’s go digital</span>
                    <br><br>
                    Here’s one your customers will enjoy as much as you will.
                    <br><br>
                    Our CRM supports integrated electronic contracts. That means customers can review all their documentation through the easy-to-use Sonar portal.
                    To keep you up to speed, Sonar automatically notifies you of expiring contracts, and allows you to carry out reports from within the administrative interface.
                    <br><br>
                    What’s more, customer signatures can be collected digitally – making contracts faster, easier, and greener.
                    <br><br>
                </p>
                <p v-show="showFeature == 'Inventory'" class="description">
                    <span class="titleTabs">An efficient inventory</span>
                    <br><br>
                    Tracking your inventory is simple with Sonar. Monitor items as they move from the warehouse to an installation vehicle, to the customer premise, or even out for RMA.
                    Define as many attributes per item as you like – MAC addresses, serial numbers, IMSIs, and more.
                    Or add as many variables as you want to customize it to your needs.
                    <br><br>
                    The inventory module is optimized for use with barcode scanners, to make scanning items in and out a breeze.
                    Each item’s entire lifecycle is stored on the system, showing where it’s been since day one.
                    <br><br>
                    Finally, the powerful real-time search function allows you to filter down all the devices made by a specific manufacturer, view all failed or deployed items,
                    or any combination of tracked attributes. You’re in full control.
                    <br><br>
                    <span class="titleTabs">A connected inventory</span>
                    <br><br>
                    To make life even easier, the inventory module is directly integrated with provisioning and monitoring.
                    That way, deploying equipment can automatically trigger provisioning events and set-up automated monitoring of latency, packet loss, bandwidth usage, and more…
                    <br><br>
                    Inventory items can also be associated with a contact or address, making it simple for support staff to keep an eye on things.
                </p>
                <p v-show="showFeature == 'Mapping'" class="description">
                    <span class="titleTabs">Intuitive mapping</span>
                    <br><br>
                    Our mapping module helps you visualize your entire network with ease.
                    See all your infrastructure, inventory locations, and your vehicle fleet, all on one screen.
                    Then manage it from within the same software, or export data for external use.
                    <br><br>
                    And it isn’t just for networks. The software is equally adept at tracking the locations of equipment and customers.
                    <br><br>
                    <span class="titleTabs">Grow with ease</span>
                    <br><br>
                    Most important, the module scales with ease. So your visualization grows alongside your network,
                    allowing you to keep up with literally hundreds of thousands of network points all at once.
                    <br><br>
                    Sound like a lot of work? Nope. The dynamic mapping module updates automatically, constantly scanning to keep you up-to-date.
                </p>
                <p v-show="showFeature == 'Portal'" class="description">
                    <span class="titleTabs">Empower your customers</span>
                    <br><br>
                    The Sonar portal is where the magic happens.
                    Here, customers can review invoices and payments, keep an eye on their usage, open tickets, and plenty more.
                    Basically everything they could ever want, all in one place.
                    <br><br>
                    The Sonar portal is smart, it’s sleek, and it’s mind-blowingly easy-to-use.
                    As you’d expect, the portal is equally happy operating on desktop, smart phones, or tablet devices.
                    So your customers can check-in from anywhere.
                    <br><br>
                    <span class="titleTabs">Customize your portal</span>
                    <br><br>
                    Want to hear the best bit? The portal is totally open-source.
                    That means you can embed it to your site, run it as a standalone application, or customize it however you want to make it work right for you.
                    <br><br>
                    And you don’t have to be a tech-wizard to customize it, either.
                    Right out of the box, the Portal lets you add your company logo, add custom messaging, and enable or disable the features you need.
                    <br><br>
                    Welcome to the beginning of a new era for customer experience.
                </p>
                <p v-show="showFeature == 'Provisioning'" class="description">
                    <span class="titleTabs">More personal provisioning</span>
                    <br><br>
                    Automated customer provisioning is a big deal. At least, we think so.
                    Whether you’re upping a customer’s speed, suspending their service, or welcoming them back – it can all be done in an instant, with minimal need for human intervention.
                    <br><br>
                    Provisioning is also where we get personal. With full support for a variety of standards-based options like RADIUS and DHCP,
                    and direct integration with all the leading vendors, Sonar allows you to provision your network in the way that makes sense for you.
                </p>
                <p v-show="showFeature == 'Monitoring'" class="description">
                    <span class="titleTabs">Get your support staff live</span>
                    <br><br>
                    The Sonar CRM keeps support staff in the loop 24/7.
                    Sonar can track any SNMP-based statistics on a rapid 60-second polling cycle, from latency to jitter stats.
                    And it feeds all this info live and direct to your support team’s dash.
                    <br><br>
                    <span class="titleTabs">A powerful dashboard</span>
                    <br><br>
                    Our monitoring solution also extends to your network, giving you the power to control everything centrally.
                    Define thresholds, set-up on-call rotations for staff, and send out notifications of events via email and SMS.
                    From the monitoring dashboard, you can track events, see flapping devices, respond to outages, and plenty more. You really are more in control than ever.
                </p>
                <p v-show="showFeature == 'Ticketing'" class="description">
                    <span class="titleTabs">Ticketing that goes the distance</span>
                    <br><br>
                    The Sonar platform makes light work of ticketing – making it both easier, and more effective.
                    <br><br>
                    Like all our modules, ticketing is fully integrated with the Sonar platform. That means incoming tickets are automatically associated with customer accounts.
                    Call logs can be escalated to tickets, and tickets can be linked to service calls for swift resolution.
                    Sonar also lets you create internal tickets and link them to customer tickets to track impact.
                    <br><br>
                    We also speed up ticket response, thanks to support for custom signatures, canned replies, custom filters, and more. Really, the list goes on…
                </p>
                <p v-show="showFeature == 'Scheduling'" class="description">
                    <span class="titleTabs">Streamline your field work</span>
                    <br><br>
                    Optimized for use in the field, our scheduling system is all about empowering your staff.
                    The simple interface allows for check-in and completion of work in the field.
                    Meanwhile, office staff have the ability to track technicians, see the status of jobs, and schedule new work.
                    <br><br>
                    And you can wave goodbye to printed work orders. All tasks can be completed from a smart phone, laptop, or tablet.
                    <br><br>
                    Thanks to full integration, once field work is complete, Sonar takes over. Simply define the events you want to trigger, such as adding an installation fee,
                    activating the account, generating an invoice. Whatever works for you.
               </p>
                <p v-show="showFeature == 'API'" class="description">
                    <span class="titleTabs">Get the flexibility you need</span>
                    <br><br>
                    We know that businesses’ needs change as they grow. That’s why we’ve created the Sonar API, to ensure that our product can grow alongside you.
                    Our API isn’t an afterthought.
                    All the modules and systems inside Sonar are exposed via the API, even our real-time search engine.
                    <br><br>
                    The Sonar API is a comprehensive and powerful GraphQL tool that allows you to integrate any external systems you need.
                    We also offer a selection of webhooks, allowing you to automatically trigger external systems based on events inside Sonar.
               </p>
                <sButton class="margin-m-top" color="opaque" route="/demo">Schedule a demo</sButton>
            </div>
        </div>
    </section>
</template>
<script>
    require('vue2-animate/dist/vue2-animate.min.css');
    import sButton from '@/components/basic/button.vue'
    export default {
        name: 'features',
        components: {
            sButton
        },
        data() {
            return {
                showFeature: "Billing"
            }
        },
        watch: {
            showFeature: function() {
                this.$refs.player.currentTime = 0;
                this.$refs.player.play();
            }
        }
}
</script>
<style scoped>
    .tabs {
     width: 100%;
    }
    .titleTabs {
        font-size: 22px;
        font-weight: 800;
    }
    section {
        display: block;
        overflow: hidden;
    }

    img {
        width: 1000px;
        border: 0;
    }

    p {
        margin: 0 0 14px;
    }

    ul {
        margin-top: 0;
        margin-bottom: 14px;
    }

    img {
        vertical-align: middle;
    }

    .full {
        position: relative;
    }

    .full video {
        pointer-events: none;
        height: auto;
        max-width: 1300px;
        min-width: 50%;
    }

    .active {
        position: relative;
        padding: 1em 1em;
        border-bottom: 0.2em solid rgb(255, 255, 255);
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 1;
        text-transform: capitalize;
        color: rgb(255, 255, 255);
        border-top-color: rgb(255, 255, 255);
        border-right-color: rgb(255, 255, 255);
        border-left-color: rgb(255, 255, 255);
        transition: all 0.25s ease 0s;
        box-shadow: 0px 40px 40px rgba(255, 255, 255, 0.08);
    }

    .active:hover {
        cursor: pointer;
    }

    .inactive {
        position: relative;
        padding: 1em 1em;
        border-bottom: 0.2em solid rgba(255, 255, 255, 0.2);
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 1;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.7);
        border-top-color: rgba(255, 255, 255, 0.2);
        border-right-color: rgba(255, 255, 255, 0.2);
        border-left-color: rgba(255, 255, 255, 0.2);
        transition: all 0.25s ease 0s;
    }

    .inactive:hover {
        cursor: pointer;
    }

    .flex-inline {
        display: inline-flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 5px;
        margin: 0em auto 2em;
        list-style: none;
    }

    .big {
        padding: 50px 2em;
        overflow: hidden;
        background-color: rgb(0, 0, 0);
    }

    .hero {
        position: relative;
        max-width: 100%;
        padding-top: 5em;
        padding-bottom: 5em;
        margin: 0px auto;
        border-radius: 3em;
        background-color: rgb(0, 0, 0);
        z-index: 30;
    }

    .center {
        position: relative;
        text-align: center;
    }

    .description {
        margin: 0px auto;
        max-width: 1280px;
        font-size: 1.1em;
        letter-spacing: 0px;
        text-align: left;
        line-height: 2;
        color: rgb(255, 255, 255);
        animation: fadeUp 500ms ease-out;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(5px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .flex-center {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    </style>

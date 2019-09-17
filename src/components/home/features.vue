<template>
    <section class="big">
        <div class="hero">
            <div class="center features">
                <h2 class="color-white">Packed with features</h2>
                <div class="tabs description">
                    <v-tabs-items v-model="tab" background-color="black">
                        <v-tab-item key="Billing">
                            <div class="full darkened">
                                <img src="../../../public/assets/features/Billing.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="CRM">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/CRM.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Contracts">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/CRM.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Inventory">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/Inventory.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Mapping">
                             <div class="full darkened">
                                <img src="../../../public/assets/features/Scheduling.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Portal">
                             <div class="full darkened">
                                <img src="../../../public/assets/features/Inventory.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Provisioning">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/Provisioning.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Monitoring">
                             <div class="full darkened">
                                <img src="../../../public/assets/features/Monitoring.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Ticketing">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/Ticketing.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="Scheduling">
                             <div class="full darkened">
                                <img src="../../../public/assets/features/Scheduling.png" alt="">
                             </div>
                        </v-tab-item>
                        <v-tab-item key="API">
                             <div class="full darkened">
                                <img  src="../../../public/assets/features/Ticketing.png" alt="">
                             </div>
                        </v-tab-item>
                    </v-tabs-items>
                    <v-tabs
                            v-model="tab"
                            background-color="black"
                            color="white"
                            grow
                            dark
                    >
                        <v-tab  key="Billing">
                            Billing
                        </v-tab>
                        <v-tab key="CRM">
                            CRM
                        </v-tab>
                        <v-tab key="Contracts">
                            Contracts
                        </v-tab>
                        <v-tab key="Inventory">
                            Inventory
                        </v-tab>
                        <v-tab key="Mapping" >
                            Mapping
                        </v-tab>
                        <v-tab key="Portal" >
                            Portal
                        </v-tab>
                        <v-tab key="Provisioning" >
                            Provisioning
                        </v-tab>
                        <v-tab key="Monitoring" >
                            Monitoring
                        </v-tab>
                        <v-tab key="Ticketing" >
                            Ticketing
                        </v-tab>
                        <v-tab key="Scheduling" >
                            Scheduling
                        </v-tab>
                        <v-tab key="API" >
                            API
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab" background-color="black">
                        <v-tab-item key="Billing">
                                    <p class="textTab">
                                        <span class="titleTabs">Flexible, automated billing</span>
                                        <br>
                                        The Sonar billing engine is one of our best-loved features.
                                        The flexible software offers support for multi-month billing, automatic proration, geographical taxation, and more.
                                        All the power you need, backed by proper accounting practices.
                                        To make life even easier, Sonar integrates with numerous external services.
                                        That means you can add automated taxation, automatically send out invoices to customers, and even use your chosen payment processor.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="CRM">
                                    <p class="textTab">
                                        <span class="titleTabs">Take control of your data</span>
                                        <br>
                                        Sonar changes the way you view your customers.
                                        With our software, you can sort customer data in whatever way you choose: by service, by status, by type – however you want.
                                        What does this mean for your business? Your customer experiences can be tailored with minimal intervention.
                                        For example: emails can be automatically triggered for certain subsets – saving you significant man-hours, while still making each user’s experience feel personal.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Contracts">
                                    <p class="textTab">
                                        <span class="titleTabs">Let’s go digital</span>
                                        <br>
                                        Here’s one your customers will enjoy as much as you will.
                                        Our CRM supports integrated electronic contracts. That means customers can review all their documentation through the easy-to-use Sonar portal.
                                        To keep you up to speed, Sonar automatically notifies you of expiring contracts, and allows you to carry out reports from within the administrative interface.
                                        What’s more, customer signatures can be collected digitally – making contracts faster, easier, and greener.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Inventory">
                                    <p class="textTab">
                                        <span class="titleTabs">An efficient inventory</span>
                                        <br>
                                        Tracking your inventory is simple with Sonar. Monitor items as they move from the warehouse to an installation vehicle, to the customer premise, or even out for RMA.
                                        Define as many attributes per item as you like – MAC addresses, serial numbers, IMSIs, and more.
                                        Or add as many variables as you want to customize it to your needs.
                                        The inventory module is optimized for use with barcode scanners, to make scanning items in and out a breeze.
                                        Each item’s entire lifecycle is stored on the system, showing where it’s been since day one.
                                        Finally, the powerful real-time search function allows you to filter down all the devices made by a specific manufacturer, view all failed or deployed items,
                                        or any combination of tracked attributes. You’re in full control.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Mapping">
                                    <p class="textTab">
                                        <span class="titleTabs">Intuitive mapping</span>
                                        <br>
                                        Our mapping module helps you visualize your entire network with ease.
                                        See all your infrastructure, inventory locations, and your vehicle fleet, all on one screen.
                                        Then manage it from within the same software, or export data for external use.
                                        And it isn’t just for networks. The software is equally adept at tracking the locations of equipment and customers.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Portal">
                                    <p class="textTab">
                                        <span class="titleTabs">Empower your customers</span>
                                        <br>
                                        The Sonar portal is where the magic happens.
                                        Here, customers can review invoices and payments, keep an eye on their usage, open tickets, and plenty more.
                                        Basically everything they could ever want, all in one place.
                                        The Sonar portal is smart, it’s sleek, and it’s mind-blowingly easy-to-use.
                                        As you’d expect, the portal is equally happy operating on desktop, smart phones, or tablet devices.
                                        So your customers can check-in from anywhere.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Provisioning">
                                    <p class="textTab">
                                        <span class="titleTabs">More personal provisioning</span>
                                        <br>
                                        Automated customer provisioning is a big deal. At least, we think so.
                                        Whether you’re upping a customer’s speed, suspending their service, or welcoming them back – it can all be done in an instant, with minimal need for human intervention.
                                        Provisioning is also where we get personal. With full support for a variety of standards-based options like RADIUS and DHCP,
                                        and direct integration with all the leading vendors, Sonar allows you to provision your network in the way that makes sense for you.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Monitoring">
                                    <p class="textTab">
                                        <span class="titleTabs">Get your support staff live</span>
                                        <br>
                                        The Sonar CRM keeps support staff in the loop 24/7.
                                        Sonar can track any SNMP-based statistics on a rapid 60-second polling cycle, from latency to jitter stats.
                                        And it feeds all this info live and direct to your support team’s dash.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Ticketing">
                                    <p class="textTab">
                                        <span class="titleTabs">Ticketing that goes the distance</span>
                                        <br>
                                        The Sonar platform makes light work of ticketing – making it both easier, and more effective.
                                        Like all our modules, ticketing is fully integrated with the Sonar platform. That means incoming tickets are automatically associated with customer accounts.
                                        Call logs can be escalated to tickets, and tickets can be linked to service calls for swift resolution.
                                        Sonar also lets you create internal tickets and link them to customer tickets to track impact.
                                        We also speed up ticket response, thanks to support for custom signatures, canned replies, custom filters, and more. Really, the list goes on…
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="Scheduling">
                                    <p class="textTab">
                                        <span class="titleTabs">Streamline your field work</span>
                                        <br>
                                        Optimized for use in the field, our scheduling system is all about empowering your staff.
                                        The simple interface allows for check-in and completion of work in the field.
                                        Meanwhile, office staff have the ability to track technicians, see the status of jobs, and schedule new work.
                                        And you can wave goodbye to printed work orders. All tasks can be completed from a smart phone, laptop, or tablet.
                                        Thanks to full integration, once field work is complete, Sonar takes over. Simply define the events you want to trigger, such as adding an installation fee,
                                        activating the account, generating an invoice. Whatever works for you.
                                    </p>
                                </v-tab-item>
                        <v-tab-item key="API">
                            <p class="textTab">
                                <span class="titleTabs">Get the flexibility you need</span>
                                <br>
                                We know that businesses’ needs change as they grow. That’s why we’ve created the Sonar API, to ensure that our product can grow alongside you.
                                Our API isn’t an afterthought.
                                All the modules and systems inside Sonar are exposed via the API, even our real-time search engine.
                                The Sonar API is a comprehensive and powerful GraphQL tool that allows you to integrate any external systems you need.
                                We also offer a selection of webhooks, allowing you to automatically trigger external systems based on events inside Sonar.
                            </p>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
                <router-link :to="{name: 'demo'}">
                    <v-btn large color="white">Schedule a demo</v-btn>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
    require('vue2-animate/dist/vue2-animate.min.css');
    export default {
        name: 'features',
        data: () => ({
            tab: null
        }),
    }
</script>
<style lang="scss">
    .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev{
        display: none;
    }
    .v-tabs {
        margin: 90px 0 0;
    }
    .features {
        .v-slide-group__wrapper {
            background: black;
            color: #fff;
        }
        .theme--light.v-tabs-items {
            margin-top: 30px;
            background-color: #000;
            color: #fff;
        }
        .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
            /*background:linear-gradient(to right, #a1c4fd 0%, #c2e9fb 26%, #a1c4fd 81%);*/
            color: #fff;
            height: 60px;
            background: linear-gradient(-90deg, #0f6afc, #5697ff, #70a7ff, #5697ff, #0f6afc);
            background-size: 400% 400%;
            animation: gradientBG 5s ease infinite;
        }
    }
        @keyframes gradientBG {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
</style>
<style lang="scss" scoped>
    .big {
        padding: 50px 2em;
        overflow: hidden;
        background-color: rgb(0, 0, 0);
        .hero {
            position: relative;
            max-width: 100%;
            margin: 0px auto;
            border-radius: 3em;
            background-color: rgb(0, 0, 0);
            z-index: 30;
            .center {
                position: relative;
                text-align: center;
                .tabs {
                    margin: 90px 0;
                    .textTab {
                        text-align: left;
                        .titleTabs {
                            font-size: 22px;
                            font-weight: 800;
                        }
                    }
                }
                .description {
                    margin: 10px auto 40px;
                    max-width: 1280px;
                    font-size: 1.1em;
                    letter-spacing: 0px;
                    text-align: left;
                    line-height: 2;
                    color: rgb(255, 255, 255);
                }
                .darkened {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    img {
                        height: 385px;
                        margin: auto;
                        width: 1000px;
                        border: 0;
                        object-fit: scale-down;
                    }
                }
            }

        }

    }
</style>

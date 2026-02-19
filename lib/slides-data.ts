export interface SlideStep {
  number: number
  title: string
  description: string
  important?: boolean
}

export interface SlideData {
  id: number
  phase?: string
  title: string
  subtitle?: string
  body?: string
  logo?: string
  steps?: SlideStep[]
  media?: {
    type: "video" | "image"
    label: string
    src?: string
  }[]
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "The Complete Daily Workflow",
    subtitle: "From Square to the App",
    body: "This automated system connects your register to your website so customers can track their own orders.",
    logo: "/cropped-VLogo.png",
  },
  {
    id: 2,
    phase: "Phase 1",
    title: "Taking the Order & Automation",
    body: "The first part of the process is simple: ring up the customer in Square as usual.\n\n**CRITICAL STEP**: You must get the customer's email and input it into Square. Without an email, the order cannot be automatically created in WooCommerce and the automated tracking message will not be sent.\n\nOnce the email is entered and payment is complete, Zapier handles the rest—instantly creating the order and sending your client their 5-digit tracking number.",
  },
  {
    id: 3,
    phase: "Phase 2",
    title: "Updating the Status on Your Phone",
    body: "A few days later, instead of calling the customer, you can update their tracking portal right from your phone so they can see the progress themselves.",
  },
  {
    id: 4,
    phase: "Phase 2",
    title: "App Setup Tutorial",
    body: "Watch this video for a quick walkthrough on how to download and set up the WooCommerce app, or continue to the next slides for step-by-step instructions.",
    media: [
      {
        type: "video",
        label: "How to Download & Use WooCommerce App",
        src: "/How to download & use WooCommerce app.mov",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 2",
    title: "Installing the WooCommerce App",
    steps: [
      {
        number: 1,
        title: "Download the App",
        description:
          'Download the free WooCommerce app (look for the purple "W" icon) from the App Store or Play Store.',
      },
    ],
    media: [
      {
        type: "image",
        label: "Download WooCommerce App",
        src: "/WooCommerce App step 1.PNG",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 2",
    title: "Skip the Setup",
    steps: [
      {
        number: 2,
        title: "Skip to the Bottom",
        description:
          'When you first open the app, do not enter your email. Instead, press the "Skip" button at the very bottom of the screen.',
      },
    ],
    media: [
      {
        type: "image",
        label: "Skip Setup",
        src: "/WooCommerce App step 2.PNG",
      },
    ],
  },
  {
    id: 7,
    phase: "Phase 2",
    title: "Store Login",
    steps: [
      {
        number: 3,
        title: "Press Login Button",
        description:
          'Look towards the bottom of the screen and tap the "Enter your store address" or Login button to proceed.',
      },
    ],
    media: [
      {
        type: "image",
        label: "Store Address Login",
        src: "/WooCommerce App step 3.PNG",
      },
    ],
  },
  {
    id: 8,
    phase: "Phase 2",
    title: "Enter Store Address",
    steps: [
      {
        number: 4,
        title: "Type the Website URL",
        description:
          "Type in your exact website address: alterationsbyv.flywheelsites.com. Click continue to proceed",
      },
    ],
    media: [
      {
        type: "image",
        label: "Enter Store Address",
        src: "/WooCommerce App step 4.PNG",
      },
    ],
  },
  {
    id: 9,
    phase: "Phase 2",
    title: "Confirm & Login",
    steps: [
      {
        number: 5,
        title: "Continue to Credentials",
        description:
          "Enter your specific credentials:\n\nUsername: Alterationsbyv\nPassword: Altbyv#2026",
      },
    ],
    media: [
      {
        type: "image",
        label: "URL Entered",
        src: "/WooCommerce App step 5.PNG",
      },
    ],
  },
  {
    id: 10,
    phase: "Phase 2",
    title: "Finalize Connection",
    steps: [
      {
        number: 6,
        title: "Tap Continue",
        description: "Tap the purple button to finish connecting your store.",
      },
    ],
    media: [
      {
        type: "image",
        label: "Tap Continue",
        src: "/WooCommerce App step 6.PNG",
      },
    ],
  },
  {
    id: 11,
    phase: "Phase 2",
    title: "The Orders Tab",
    steps: [
      {
        number: 7,
        title: "Open Your Orders",
        description:
          "Once logged in, look at the bottom dashboard. Tap the icon labeled 'Orders' (highlighted with a red circle).",
      },
    ],
    media: [
      {
        type: "image",
        label: "Orders Tab",
        src: "/WooCommerce App step 7.PNG",
      },
    ],
  },
  {
    id: 12,
    phase: "Phase 2",
    title: "Manage a Specific Order",
    steps: [
      {
        number: 8,
        title: "Select the Client",
        description: "Tap on the customer's name to open and manage their specific order.",
      },
    ],
    media: [
      {
        type: "image",
        label: "Select Customer Order",
        src: "/WooCommerce App step 8.PNG",
      },
    ],
  },
  {
    id: 13,
    phase: "Phase 2",
    title: "Current Status",
    steps: [
      {
        number: 9,
        title: "Review Order Details",
        description: 'Here you can see the current status of the order. To make changes, click the pencil icon to the right.',
      },
    ],
    media: [
      {
        type: "image",
        label: "Update Status",
        src: "/WooCommerce App step 9.PNG",
      },
    ],
  },
  {
    id: 14,
    phase: "Phase 2",
    title: "Update & Save",
    steps: [
      {
        number: 10,
        title: "Select New Status",
        description: 'A drop-down will appear where you can select the new status. The most important statuses for your workflow are: "Qued for Production", "In Production", "Awaiting Materials", and "Completed". (If you\'d like a custom status, just let us know and we can create it for you!) Once selected, click apply in the top right corner.',
      },
    ],
    media: [
      {
        type: "image",
        label: "Hit Save",
        src: "/WooCommerce App step 10.PNG",
      },
    ],
  },
  {
    id: 15,
    phase: "Phase 2",
    title: "Automated Notifications",
    steps: [
      {
        number: 11,
        title: "Completed & Notified",
        description: "Selecting the 'Completed' status and pressing 'Apply' will trigger an automatic email to your customer letting them know their order is ready for pickup at our business address.",
      },
    ],
    media: [
      {
        type: "image",
        label: "Completed Status",
        src: "/WooCommerce App step 11.PNG",
      },
    ],
  },
  {
    id: 16,
    title: "The Customer Experience",
    body: "This video shows what your client sees: from the automatic tracking email they receive to how they self-track their status directly on your website portal. It also demonstrates how updating an order in the WooCommerce app instantly syncs with your website.",
    media: [
      {
        type: "video",
        label: "How Your Clients Self Track",
        src: "/How your clients self track.MP4",
      },
    ],
  },
  {
    id: 17,
    title: "Congratulations, You're All Set!",
    body: "This is now your new automated workflow. Great job on completing this setup! \n\nWe've customized your WooCommerce email notifications to guide your customers through the self-tracking process, but we also recommend letting them know about this new portal yourself to ensure they feel supported. If you have any other questions or need further assistance, please don't hesitate to contact us at Foundit Marketing. We're here to help!",
    logo: "/cropped-VLogo.png",
  },
]

---
# === Identification ===
id: "quick-start-guide"
slug: "quick-start-guide"
locale: "en"

# === Content Metadata ===
title: "Quick start guide"
description: "Step-by-step guide to creating your Tooli account and starting your first conversation. Get up and running in 2 minutes."
seo_title: "Quick start guide | Tooli Documentation"
seo_description: "Get up and running with Tooli in just 5 minutes. This guide walks you through everything you need to start using Belgium's construction-specific AI platform."

# === Navigation ===
section: "welcome"
order: 1

# === Translation Management ===
source_language: "en"
translation_status: "source"
last_updated: "2025-01-02"
source_version: "1.0"
translator: ""

# === Page Settings ===
toc: true
prev_page: ""
next_page: "what-is-tooli"
---

## What you need

<CardGroup cols={2}>
  <Card title="1) Membership" icon="users">
    Active membership with at least one of the organisations:

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
        marginTop: "0px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <a className="partnerLogoLink" href="https://embuild.be/nl/lid-worden-0" target="_blank"
       rel="noopener noreferrer">
        {/* Light mode image */}
        <img 
          className="block dark:hidden" 
          src="/assets/orgs/embuild.png" 
          alt="Embuild"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
        {/* Dark mode image */}
        <img 
          className="hidden dark:block" 
          src="/assets/orgs/embuild_dm.png" 
          alt="Embuild"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
      </a>

      <a className="partnerLogoLink" href="https://www.bouwunie.be/nl/lidmaatschap" target="_blank" rel="noopener noreferrer">
        <img 
          src="/assets/orgs/bouwunie.png" 
          alt="Bouwunie"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
      </a>

      <a className="partnerLogoLink" href="https://constructiv.be" target="_blank" rel="noopener noreferrer">
        <img 
          src="/assets/orgs/constructiv.png" 
          alt="Constructiv"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
      </a>

      <a className="partnerLogoLink" href="https://www.buildwise.be/nl/help-center/faq/hoe-maak-ik-een-buildwise-account-aan/" target="_blank" rel="noopener noreferrer">
        {/* Light mode image */}
        <img 
          className="block dark:hidden" 
          src="/assets/orgs/buildwise.png" 
          alt="Buildwise"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
        {/* Dark mode image */}
        <img 
          className="hidden dark:block" 
          src="/assets/orgs/buildwise_dm.png" 
          alt="Buildwise"
          style={{ width: "100%", height: "48px", objectFit: "contain" }}
        />
      </a>
    </div>
  </Card>

  <Card title="2) Email" icon="inbox">
    The email address linked to one of these organizations.
  </Card>
</CardGroup>

***

<Steps>
  <Step title="Go to Tooli">
    **[www.tooli.be](https://www.tooli.be/)**

  </Step>

  <Step title="Registration">
    There are 2 options to make an account:

    <Frame caption="Sign up with email and password ('Aanmelden'), or log in with your Buildwise account">
      ![Tooli registration screen](/assets/onboarding/en/tooli_homescreen_registration.png)
    </Frame>

    <AccordionGroup>
      <Accordion title="1) Log in with your Buildwise account" icon="log-in">
        Click on the Buildwise button to log in with your Buildwise account.

        <Frame caption="You'll be redirected to Buildwise. Log in there, and your account is automatically linked to Tooli.">
          ![Log in via Buildwise](/assets/onboarding/en/SSO_buttons.jpg)
        </Frame>
      </Accordion>

      <Accordion title="2) Create an account with email and password" icon="mail">
            **Fill in your details:**

        * Full name
        * Professional email address
        <Tip>
          Make sure you use the email address that you use for your membership with at least one of the partner organisations.
        </Tip>
        * Password (minimum 8 characters)



        
        <Frame caption="Fill in your details and click 'Aanmelden' to create your account.">
          ![Registration form](/assets/onboarding/en/tooli_homescreen_registration_2.jpg)
        </Frame>
 
        You will receive a verification email to complete this. Make sure to check your spam folder.
        
        <Warning>
          Didn't receive the verification email? Check [Access & Logging in](/en/support/access-and-logging-in).
        </Warning>
        

      </Accordion>
    </AccordionGroup>

  </Step>

  <Step title="Start with Tooli">
  That's it!
  The automatic tour will guide you all of Tooli's features and skills.
  
  For more questions, please see our [Support pages](/en/support/tooli-ai-and-data).

  <Tip>
    Interested in seeing the tour again? You can find it in the bottom-left corner, by clicking on your profile and then going to Settings.
  </Tip>

  </Step>
</Steps>

***

<Note>
  Didn't manage, or you have questions or remarks? You can reach us directly [here](mailto:support@meetwonka.com)
</Note>
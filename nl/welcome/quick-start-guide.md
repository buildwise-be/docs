---
# === Identification ===
id: "quick-start-guide"
slug: "quick-start-guide"
locale: "nl"

# === Content Metadata ===
title: "Aan de slag"
description: "Stap-voor-stap handleiding om je Tooli-account aan te maken en je eerste gesprek te starten. Binnen 2 minuten aan de slag."
seo_title: "Aan de slag | Tooli Documentatie"
seo_description: "Begin binnen 5 minuten met Tooli. Deze gids neemt je door alles wat je nodig hebt om te beginnen met België's bouwspecifieke AI-platform."

# === Navigation ===
section: "welcome"
order: 1

# === Translation Management ===
source_language: "en"
translation_status: "outdated"
last_updated: "2025-01-02"
source_version: "1.0"
translator: ""

# === Page Settings ===
toc: true
prev_page: ""
next_page: "what-is-tooli"
---

## Wat heb je nodig?

<CardGroup cols={2}>
  <Card title="1) Lidmaatschap" icon="users">
    Actief lidmaatschap bij ten minste één van de organisaties:

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

  <Card title="2) E-mail" icon="inbox">
    Het e-mailadres gekoppeld aan een van deze organisaties.
  </Card>
</CardGroup>

***

<Steps>
  <Step title="Ga naar Tooli">
    **[www.tooli.be](https://www.tooli.be/)**

  </Step>

  <Step title="Registratie">
    Er zijn 2 opties om een account aan te maken:

    <Frame caption="Registreer met e-mail en wachtwoord ('Aanmelden'), of log in via Buildwise">
      ![Tooli registratiescherm](/assets/onboarding/nl/tooli_homescreen_registration.png)
    </Frame>

    <AccordionGroup>
      <Accordion title="1) Inloggen met je Buildwise-account" icon="log-in">
        Klik op de Buildwise-knop om in te loggen met je Buildwise-account.

        <Frame caption="Je wordt doorgestuurd naar Buildwise. Log daar in, en je account is automatisch gekoppeld aan Tooli.">
          ![Inloggen via Buildwise](/assets/onboarding/nl/SSO_buttons.jpg)
        </Frame>
      </Accordion>

      <Accordion title="2) Maak een account aan met e-mail en wachtwoord" icon="mail">
            **Vul je gegevens in:**

        * Volledige naam
        * Professioneel e-mailadres
        <Tip>
          Zorg ervoor dat je het e-mailadres gebruikt dat je gebruikt voor je lidmaatschap bij ten minste één van de partnerorganisaties.
        </Tip>
        * Wachtwoord (minimaal 8 tekens)



        
        <Frame caption="Vul je gegevens in en klik op 'Aanmelden' om je account aan te maken.">
          ![Registratieformulier](/assets/onboarding/nl/tooli_homescreen_registration_2.jpg)
        </Frame>
 
        Je ontvangt een verificatie-e-mail om dit te voltooien. Zorg ervoor dat je je spammap controleert.
        
        <Warning>
          Geen verificatie-e-mail ontvangen? Bekijk [Toegang & Inloggen](/nl/support/access-and-logging-in).
        </Warning>
        

      </Accordion>
    </AccordionGroup>

  </Step>

  <Step title="Start met Tooli">
  Dat is alles!
  De automatische tour begeleidt je door alle functies en vaardigheden van Tooli.
  
  Voor meer vragen, zie onze [Ondersteuningspagina's](/nl/support/tooli-ai-and-data).

  <Tip>
    Wil je de tour opnieuw bekijken? Je vindt deze linksonder, door op je profiel te klikken en dan naar Instellingen te gaan.
  </Tip>

  </Step>
</Steps>

***

<Note>
  Niet gelukt, of je hebt vragen of opmerkingen? Je kunt ons [hier](mailto:support@tooli.be) bereiken.
</Note>

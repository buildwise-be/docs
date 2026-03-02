---
# === Identification ===
id: "quick-start-guide"
slug: "quick-start-guide"
locale: "de"

# === Content Metadata ===
title: "Schnellstartanleitung"
description: "Schritt-für-Schritt-Anleitung zum Erstellen Ihres Tooli-Kontos und Starten Ihres ersten Gesprächs. In 2 Minuten startklar."
seo_title: "Schnellstartanleitung | Tooli Dokumentation"
seo_description: "Starten Sie in nur 5 Minuten mit Tooli. Diese Anleitung führt Sie durch alles, was Sie brauchen, um mit Belgiens bauspezifischer KI-Plattform zu beginnen."

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

## Was Sie brauchen

<CardGroup cols={2}>
  <Card title="1) Mitgliedschaft" icon="users">
    Aktive Mitgliedschaft bei mindestens einer der Organisationen:

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

  <Card title="2) E-Mail" icon="inbox">
    Die E-Mail-Adresse, die mit einer dieser Organisationen verknüpft ist.
  </Card>
</CardGroup>

***

<Steps>
  <Step title="Zu Tooli gehen">
    **[www.tooli.be](https://www.tooli.be/)**

  </Step>

  <Step title="Registrierung">
    Es gibt 2 Optionen, um ein Konto zu erstellen:

    <Frame caption="Registrieren Sie sich mit E-Mail und Passwort ('Aanmelden'), oder melden Sie sich über Buildwise an">
      ![Tooli Registrierungsbildschirm](/assets/onboarding/de/tooli_homescreen_registration.png)
    </Frame>

    <AccordionGroup>
      <Accordion title="1) Anmelden mit Ihrem Buildwise-Konto" icon="log-in">
        Klicken Sie auf den Buildwise-Button, um sich mit Ihrem Buildwise-Konto anzumelden.

        <Frame caption="Sie werden zu Buildwise weitergeleitet. Melden Sie sich dort an, und Ihr Konto wird automatisch mit Tooli verknüpft.">
          ![Anmeldung über Buildwise](/assets/onboarding/de/SSO_buttons.jpg)
        </Frame>
      </Accordion>

      <Accordion title="2) Ein Konto mit E-Mail und Passwort erstellen" icon="mail">
            **Füllen Sie Ihre Daten aus:**

        * Vollständiger Name
        * Professionelle E-Mail-Adresse
        <Tip>
          Stellen Sie sicher, dass Sie die E-Mail-Adresse verwenden, die Sie für Ihre Mitgliedschaft bei mindestens einer der Partnerorganisationen verwenden.
        </Tip>
        * Passwort (mindestens 8 Zeichen)



        
        <Frame caption="Geben Sie Ihre Daten ein und klicken Sie auf 'Aanmelden', um Ihr Konto zu erstellen.">
          ![Registrierungsformular](/assets/onboarding/de/tooli_homescreen_registration_2.jpg)
        </Frame>
 
        Sie erhalten eine Verifizierungs-E-Mail, um dies abzuschließen. Stellen Sie sicher, dass Sie Ihren Spam-Ordner überprüfen.
        
        <Warning>
          Keine Verifizierungs-E-Mail erhalten? Siehe [Zugang & Anmeldung](/de/support/access-and-logging-in).
        </Warning>
        

      </Accordion>
    </AccordionGroup>

  </Step>

  <Step title="Mit Tooli beginnen">
  Das war's!
  Die automatische Tour führt Sie durch alle Funktionen und Fähigkeiten von Tooli.
  
  Für weitere Fragen besuchen Sie unsere [Supportseiten](/de/support/tooli-ai-and-data).

  <Tip>
    Möchten Sie die Tour erneut sehen? Sie finden sie unten links, indem Sie auf Ihr Profil klicken und dann zu Einstellungen gehen.
  </Tip>

  </Step>
</Steps>

***

<Note>
  Nicht geschafft, oder Sie haben Fragen oder Anmerkungen? Sie können uns direkt [hier](mailto:support@tooli.be) erreichen
</Note>

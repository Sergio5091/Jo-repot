# Configuration EmailJS

## Étapes pour configurer l'envoi d'emails

### 1. Créer un compte EmailJS
Allez sur [https://www.emailjs.com/](https://www.emailjs.com/) et créez un compte gratuit.

### 2. Configurer un service email
1. Dans votre dashboard EmailJS, allez dans "Email Services"
2. Ajoutez un service (Gmail, Outlook, etc.)
3. Notez le **Service ID**

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Créez un nouveau template avec ces variables :
   - `{{to_email}}` - Email destinataire (sera automatiquement défini)
   - `{{from_name}}` - Nom complet du candidat
   - `{{employee_id}}` - ID employé
   - `{{full_name}}` - Nom de famille
   - `{{first_name}}` - Prénom
   - `{{phone}}` - Téléphone
   - `{{emergency_name}}` - Nom contact urgence
   - `{{emergency_phone}}` - Téléphone urgence
   - `{{health_issue}}` - Problème de santé
   - `{{availability_date}}` - Date de disponibilité
   - `{{has_cnps}}` - A une carte CNPS
   - `{{cnps_number}}` - Numéro CNPS
   - `{{cnps_proof_name}}` - Nom du fichier de preuve
   - `{{cnps_proof_base64}}` - Image de la preuve en base64
   - `{{confirm_accuracy}}` - Confirmation exactitude
   - `{{accept_terms}}` - Acceptation CGU
   - `{{submission_date}}` - Date de soumission

3. **Sujet de l'email** : `Nouvelle candidature PAA - {{from_name}}`
4. **Contenu HTML** : Copiez le contenu du fichier `EMAILJS_TEMPLATE.md`
5. Notez le **Template ID**

### 4. Récupérer la clé publique
1. Allez dans "Account" > "General"
2. Copiez la **Public Key**

### 5. Configurer les variables d'environnement
Créez un fichier `.env` dans le dossier `artifacts/paa-recruitment/` :

```env
VITE_RECIPIENT_EMAIL=sergionounagnon1@gmail.com
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
```

### 6. Redémarrer l'application
Relancez le serveur de développement pour prendre en compte les variables d'environnement.

## Test
Remplissez le formulaire et soumettez-le. Vous devriez recevoir un email avec toutes les données du candidat à `sergionounagnon1@gmail.com`.
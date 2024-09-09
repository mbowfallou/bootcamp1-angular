export interface UserDto {
    /**
     * id de la personne 
     */
    id: number;
    /**
     * prenom de la personne 
     */
    prenom?: string;
    /**
     * nom de la personne 
     */
    nom?: string;
    /**
     * email de la personne 
     */
    email?: string;
    /**
     * password de la personne 
     */
    password?: string;
}
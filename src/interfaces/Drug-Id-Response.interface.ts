export interface DrigIDResponse {
    meta:    Meta;
    results: Result[];
}

export interface Meta {
    disclaimer:   string;
    terms:        string;
    license:      string;
    last_updated: Date;
    results:      Results;
}

export interface Results {
    skip:  number;
    limit: number;
    total: number;
}

export interface Result {
    spl_product_data_elements:                                  string[];
    recent_major_changes:                                       string[];
    boxed_warning:                                              string[];
    indications_and_usage:                                      string[];
    dosage_and_administration:                                  string[];
    dosage_and_administration_table:                            string[];
    dosage_forms_and_strengths:                                 string[];
    contraindications:                                          string[];
    warnings_and_cautions:                                      string[];
    adverse_reactions:                                          string[];
    drug_interactions:                                          string[];
    drug_interactions_table:                                    string[];
    use_in_specific_populations:                                string[];
    pregnancy:                                                  string[];
    pediatric_use:                                              string[];
    geriatric_use:                                              string[];
    overdosage:                                                 string[];
    description:                                                string[];
    clinical_pharmacology:                                      string[];
    mechanism_of_action:                                        string[];
    pharmacodynamics:                                           string[];
    pharmacokinetics:                                           string[];
    nonclinical_toxicology:                                     string[];
    carcinogenesis_and_mutagenesis_and_impairment_of_fertility: string[];
    clinical_studies:                                           string[];
    how_supplied:                                               string[];
    information_for_patients:                                   string[];
    spl_medguide:                                               string[];
    spl_medguide_table:                                         string[];
    package_label_principal_display_panel:                      string[];
    set_id:                                                     string;
    id:                                                         string;
    effective_time:                                             string;
    version:                                                    string;
    openfda:                                                    { [key: string]: string[] };
}

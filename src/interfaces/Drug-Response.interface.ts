export interface DrugResponse {
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
    spl_unclassified_section:                                   string[];
    description:                                                string[];
    clinical_pharmacology:                                      string[];
    pharmacokinetics:                                           string[];
    indications_and_usage:                                      string[];
    contraindications:                                          string[];
    warnings:                                                   string[];
    precautions:                                                string[];
    information_for_patients:                                   string[];
    drug_interactions:                                          string[];
    drug_and_or_laboratory_test_interactions:                   string[];
    carcinogenesis_and_mutagenesis_and_impairment_of_fertility: string[];
    pregnancy:                                                  string[];
    teratogenic_effects:                                        string[];
    nursing_mothers:                                            string[];
    pediatric_use:                                              string[];
    adverse_reactions:                                          string[];
    overdosage:                                                 string[];
    dosage_and_administration:                                  string[];
    how_supplied:                                               string[];
    storage_and_handling:                                       string[];
    package_label_principal_display_panel:                      string[];
    set_id:                                                     string;
    id:                                                         string;
    effective_time:                                             string;
    version:                                                    string;
    openfda:                                                    { [key: string]: string[] };
}

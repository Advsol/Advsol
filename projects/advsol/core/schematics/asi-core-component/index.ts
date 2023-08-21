import { apply, Rule, applyTemplates, move, url, chain, mergeWith } from "@angular-devkit/schematics";
import {strings, normalize } from "@angular-devkit/core"
import { AsiCoreComponentSchema } from "./asi-core-component";

export function AsiCoreComponentGenerator(option: AsiCoreComponentSchema): Rule {
    return () => {
        const templateSource = apply(
            url('./files'), [
                applyTemplates(
                    {
                        classify: strings.classify,
                        dasherize: strings.dasherize,
                        name: option.name
                    }
                ),
                move(normalize(`\${option.path}\${strings.dasherize(option.name)}`))
            ]
        )
        return chain([
            mergeWith(templateSource)
        ]);
    }
}
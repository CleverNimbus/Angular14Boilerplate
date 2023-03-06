import { BaseEntity } from "./baseEntity";
import { FighterAffinity } from "./fighterAffinity";
import { FighterBasicStats } from "./fighterBasicStats";
import { FighterSkill } from "./fighterSkill";

//https://motherhoodcommunity.com/the-top-100-greek-gods-and-goddesses-names-powers/
export interface Fighter extends BaseEntity {
    fighterName: string,
    fighterDesciption: string,
    fighterLevel: number,
    fighterRarity: number,
    fighterStats: FighterBasicStats,
    fighterSkills: FighterSkill[],
    fighterAffinities: FighterAffinity
}
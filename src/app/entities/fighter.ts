import { BaseEntity } from './baseEntity';
import { FighterAffinity } from './fighterAffinity';
import { FighterBasicStats } from './fighterBasicStats';

//https://motherhoodcommunity.com/the-top-100-greek-gods-and-goddesses-names-powers/
export interface Fighter extends BaseEntity {
	fighterName: string;
	fighterDesciption: string;
	fighterLevel: number;
	fighterRarity: number;
	fighterStats: FighterBasicStats;
	fighterSkillIds: number[];
	fighterAffinities: FighterAffinity;
}

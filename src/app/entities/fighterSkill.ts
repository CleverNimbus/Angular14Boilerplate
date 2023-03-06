import { BaseEntity } from './baseEntity';
import { FighterAffinity } from './fighterAffinity';

export interface FighterSkill extends BaseEntity {
	skillName: string;
	skillDescription: string;
	skillAffinity: FighterAffinity;
}

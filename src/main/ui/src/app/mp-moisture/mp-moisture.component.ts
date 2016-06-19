import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MoistureReading, GardenState, MoistureState } from '../../store/';

@Component({
	moduleId: module.id,
	selector: 'app-mp-moisture',
	directives: [ MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_INPUT_DIRECTIVES ],
	providers: [ MdIconRegistry,  ],
	template: `<md-card>
	<md-card-title>Create a profile</md-card-title>
	<md-card-content>
		<form #f="ngForm">
			<md-input placeholder="Name" ngControl="name"></md-input>
			<md-input placeholder="Tagline" ngControl="tagline"></md-input>
			<md-input placeholder="Image URL" ngControl="image"></md-input>
		</form>
	</md-card-content>
	<md-card-actions align="end">
		<button md-raised-button color="accent" (click)="postDog(f.value)">POST</button>
	</md-card-actions>
</md-card>
`,
	styles: [
		``
	]
})
export class MpMoistureComponent implements OnInit, OnDestroy {
	@Input()
	public feed: string;

	public moisture: Observable<MoistureReading>;

	constructor(private store: Store<State<GardenState>>) {
		this.moisture = store.select('moisture')
			.map((state: MoistureState) => {
				return state[this.feed];
			});
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}
}

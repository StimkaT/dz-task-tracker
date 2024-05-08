// import { Injectable } from '@angular/core';
// import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
//
//
// @Injectable()
// export class TasksEffects {
//
//   sendMessageToDevice$ = createEffect(() =>
//       this.actions$.pipe(
//         ofType(sendMessageToDevice),
//         concatLatestFrom(() => this.store.select(getDeviceName)),
//         tap(([{message}, deviceName]) => {
//
//         })
//       ),
//     {
//       dispatch: false,
//     }
//   );
//
//   constructor(
//     private store: Store<TripodMessagesPartialState | MessagesPartialState>,
//     private actions$: Actions,
//   ) {}
//
// }

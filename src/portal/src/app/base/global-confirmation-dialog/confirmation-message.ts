// Copyright Project Harbor Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import {
    ConfirmationTargets,
    ConfirmationButtons,
} from '../../shared/entities/shared.const';

export class ConfirmationMessage {
    public constructor(
        title: string,
        message: string,
        param: string,
        data: any,
        targetId: ConfirmationTargets,
        buttons?: ConfirmationButtons
    ) {
        this.title = title;
        this.message = message;
        this.data = data;
        this.targetId = targetId;
        this.param = param;
        this.buttons = buttons ? buttons : ConfirmationButtons.CONFIRM_CANCEL;
    }
    title: string;
    message: string;
    data: any = {}; // default is empty
    targetId: ConfirmationTargets = ConfirmationTargets.EMPTY;
    param: string;
    buttons: ConfirmationButtons;
}

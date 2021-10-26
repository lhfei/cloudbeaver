/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import type { IActionItem } from '../../Action/IActionItem';
import type { IMenuActionItem } from './IMenuActionItem';
import { MenuItem } from './MenuItem';

export class MenuActionItem extends MenuItem implements IMenuActionItem {
  readonly action: IActionItem | null;

  constructor(action: IActionItem) {
    super(action.action.id);
    this.action = action;
  }
}
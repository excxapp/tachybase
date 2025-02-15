import { Plugin } from '@tachybase/client';

import { lang } from '../../locale';
import { OutboundButton, OutboundLinkActionInitializer } from './OutboundLinkActionInitializer';
import { OutboundPage } from './OutboundPage';
import { useOutboundActionProps } from './useOutboundActionProps';

export class PluginOutbound extends Plugin {
  async load() {
    this.app.router.add('outbound', {
      path: '/r/:id',
      Component: OutboundPage,
    });
    this.app.addScopes({
      useOutboundActionProps,
    });
    this.app.addComponents({
      OutboundButton,
      OutboundLinkActionInitializer,
    });
    const outboundItem = {
      type: 'item',
      name: 'enableActions.outbound',
      title: lang('outbound'),
      Component: 'OutboundLinkActionInitializer',
      schema: {
        'x-align': 'right',
      },
    };
    this.app.schemaInitializerManager.addItem('table:configureActions', outboundItem.name, outboundItem);
    this.app.schemaInitializerManager.addItem('details:configureActions', outboundItem.name, outboundItem);
    this.app.schemaInitializerManager.addItem('kanban:configureActions', outboundItem.name, outboundItem);
    this.app.schemaInitializerManager.addItem('pdfViewer:configureActions', outboundItem.name, outboundItem);
  }
}

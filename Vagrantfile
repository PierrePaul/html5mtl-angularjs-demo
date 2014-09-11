# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "html5mtl.demo" do |v|
    v.vm.hostname = "html5mtl.demo"

    v.vm.synced_folder "src", "/var/www/"

    v.vm.provider :lxc do |lxc, override|
      override.vm.box = 'fgrehm/trusty64-lxc'
    end

    v.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/playbook.yml"
      ansible.host_key_checking = false
      #ansible.verbose = 'vvvv'
      #ansible.tags = 'test'
    end
  end
end

# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, lib, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ]; 
  # Use the systemd-boot EFI boot loader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.kernelParams = ["acpi_osi=!" "acpi_osi='windows 2015'" "nvidia-drm.modeset=1"];

  networking.hostName = "MSI"; # Define your hostname.
  networking.wireless.enable = false;  # Enables wireless support via wpa_supplicant.
  nix.binaryCaches = ["https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store" "https://cache.nixos.org/"
  ];

  # The global useDHCP flag is deprecated, therefore explicitly set to false here.
  # Per-interface useDHCP will be mandatory in the future, so this generated config
  # replicates the default behaviour.
  networking.useDHCP = false;
  networking.interfaces.enp61s0.useDHCP = false;
  networking.interfaces.wlp62s0.useDHCP = false;

  networking.interfaces.enp61s0.ipv4.addresses = [{
	address = "192.168.1.3";
	prefixLength = 24;
}];

  networking.defaultGateway = "192.168.1.118";
  networking.nameservers = ["119.29.29.29"];
  networking.extraHosts = 
  ''
  	45.76.42.255 fcitx-im.org
	45.76.42.255 download.fcitx-im.org
  '';

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
   i18n = {
   defaultLocale = "en_US.UTF-8";
   extraLocaleSettings = {LANG = "zh_CN.UTF-8"; LANGUAGE = "zh_CN.UTF-8";};
   supportedLocales = ["en_US.UTF-8/UTF-8" "zh_CN.UTF-8/UTF-8"];
   inputMethod = {
   enabled = "fcitx";
  fcitx.engines = with pkgs.fcitx-engines; [ rime ];
 };
   };
   console = {
     font = "Lat2-Terminus16";
     keyMap = "us";
   };
#
  # Set your time zone.
   time.timeZone = "Asia/Shanghai";

  # List packages installed in system profile. To search, run:
  # $ nix search wget
   nixpkgs.config.allowUnfree = true;

   environment.systemPackages = with pkgs; [
     wget neovim neofetch zsh oh-my-zsh git 
   ];

  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  programs.mtr.enable = true;
  programs.gnupg.agent = {
    enable = true;
     enableSSHSupport = true;
     pinentryFlavor = "gnome3";
   };
 programs.zsh.enable = true;

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # Enable CUPS to print documents.
   services.printing.enable = true;

  # Enable sound.
   sound.enable = true;
   hardware.pulseaudio.enable = true;

  # Enable the X11 windowing system.
   services.xserver.enable = true;
   services.xserver.layout = "us";
   #services.xserver.xkbOptions = "eurosign:e";

  # Enable touchpad support.
   services.xserver.libinput.enable = true;

  # Enable the KDE Desktop Environment.
   #services.xserver.displayManager.startx.enable = true;
   services.xserver.desktopManager.gnome3.enable = true;
   #services.xserver.windowManager.bspwm.enable = true;
   #services.xserver.videoDrivers = ["modesetting" ];
   #hardware.nvidia.prime = {
   #     sync.enable = true;
   #     nvidiaBusId = "PCI:1:0:0";
   #     intelBusId = "PCI:0:2:0";
   #};

   #hardware.opengl = {
   #     enable = true;
   #     driSupport = true;
   #     driSupport32Bit = true;
   #     extraPackages = with pkgs; [ vaapiIntel libvdpau-va-gl vaapiVdpau intel-ocl ];
   #};

  # Define a user account. Don't forget to set a password with ‘passwd’.
   users.users.waytrue= {
     isNormalUser = true;
     extraGroups = [ "wheel" ]; # Enable ‘sudo’ for the user.
     shell = pkgs.zsh;
   };

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "20.09"; # Did you read the comment?
}

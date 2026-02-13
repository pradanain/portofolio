import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SonnerToaster } from "@/components/ui/sonner";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [topic, setTopic] = React.useState("project");
  const [subscribe, setSubscribe] = React.useState(true);
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Nama wajib diisi.";
    if (!form.email.trim()) nextErrors.email = "Email wajib diisi.";
    if (form.email && !emailRegex.test(form.email)) {
      nextErrors.email = "Format email belum valid.";
    }
    if (!form.message.trim()) nextErrors.message = "Pesan wajib diisi.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Periksa kembali form Anda sebelum mengirim.");
      return;
    }

    toast.success("Pesan terkirim! Saya akan membalas secepatnya.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-6">
      <SonnerToaster />
      <Tabs value={topic} onValueChange={setTopic} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="project">
            Project
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="collab">
            Kolaborasi
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="other">
            Lainnya
          </TabsTrigger>
        </TabsList>
        <TabsContent value="project">
          <p className="text-sm text-muted-foreground">
            Ceritakan ringkas kebutuhan project Anda, timeline, dan scope.
          </p>
        </TabsContent>
        <TabsContent value="collab">
          <p className="text-sm text-muted-foreground">
            Jelaskan bentuk kolaborasi yang diinginkan dan tujuan utama.
          </p>
        </TabsContent>
        <TabsContent value="other">
          <p className="text-sm text-muted-foreground">
            Tulis detail kebutuhan atau pertanyaan yang ingin disampaikan.
          </p>
        </TabsContent>
      </Tabs>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            Nama
          </label>
          <Input
            id="name"
            placeholder="Nama lengkap"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="nama@email.com"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="message">
            Pesan
          </label>
          <Textarea
            id="message"
            placeholder="Tulis pesan Anda di sini"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? (
            <p className="text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-between rounded-md border border-border/60 p-3">
          <div>
            <p className="text-sm font-medium">Subscribe update</p>
            <p className="text-xs text-muted-foreground">
              Dapatkan update terbaru portfolio dan artikel.
            </p>
          </div>
          <Switch checked={subscribe} onCheckedChange={setSubscribe} aria-label="Subscribe" />
        </div>

        <Button type="submit" className="w-full">
          Kirim Pesan
        </Button>
      </form>
    </div>
  );
}
